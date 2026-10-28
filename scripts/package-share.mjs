import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { deflateRawSync } from 'node:zlib';

// Produce a self-contained page as well as the ordinary static hosting folder.
// No Sites metadata, identity integration, credential, or source file is needed.
const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const delivery = resolve(root, '..', 'delivery');
mkdirSync(delivery, { recursive: true });
let html = readFileSync(join(dist, 'index.html'), 'utf8');
const localAsset = (url) => {
  if (!/^\.?\/?assets\/[\w.-]+$/.test(url)) throw new Error('Unexpected asset path: ' + url);
  const path = join(dist, url.replace(/^\.\//, '').replace(/^\//, ''));
  if (!existsSync(path)) throw new Error('Missing asset: ' + url);
  return readFileSync(path, 'utf8');
};
html = html.replace(/<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/g, (_, src) => {
  const js = localAsset(src);
  if (/\bimport\s*\(/.test(js)) throw new Error('Offline page must not depend on dynamic imports.');
  return '<script type="module">' + js.replace(/<\/script/gi, '<\\/script') + '</script>';
});
html = html.replace(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g, (_, href) => '<style>' + localAsset(href).replace(/<\/style/gi, '<\\/style') + '</style>');
if (/\b(?:src|href)="\.?\/?assets\//.test(html)) throw new Error('External build assets remain in offline page.');
writeFileSync(join(delivery, 'offline-preview.html'), html);
// Standard ZIP (UTF-8 names, DEFLATE) using only Node built-ins.
const crc32 = (bytes) => {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
};
const names = ['index.html', ...readdirSync(join(dist, 'assets')).map(name => 'assets/' + name)];
const local = [], directory = [];
let offset = 0;
for (const name of names) {
  const bytes = readFileSync(join(dist, name)), packed = deflateRawSync(bytes), filename = Buffer.from(name);
  const checksum = crc32(bytes);
  const header = Buffer.alloc(30);
  header.writeUInt32LE(0x04034b50); header.writeUInt16LE(20, 4); header.writeUInt16LE(0x800, 6); header.writeUInt16LE(8, 8);
  header.writeUInt16LE(0x21, 12); header.writeUInt32LE(checksum, 14); header.writeUInt32LE(packed.length, 18); header.writeUInt32LE(bytes.length, 22); header.writeUInt16LE(filename.length, 26);
  local.push(header, filename, packed);
  const central = Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50); central.writeUInt16LE(20, 4); central.writeUInt16LE(20, 6); central.writeUInt16LE(0x800, 8); central.writeUInt16LE(8, 10);
  central.writeUInt16LE(0x21, 14); central.writeUInt32LE(checksum, 16); central.writeUInt32LE(packed.length, 20); central.writeUInt32LE(bytes.length, 24); central.writeUInt16LE(filename.length, 28); central.writeUInt32LE(offset, 42);
  directory.push(central, filename);
  offset += header.length + filename.length + packed.length;
}
const centralBytes = Buffer.concat(directory), end = Buffer.alloc(22);
end.writeUInt32LE(0x06054b50); end.writeUInt16LE(names.length, 8); end.writeUInt16LE(names.length, 10); end.writeUInt32LE(centralBytes.length, 12); end.writeUInt32LE(offset, 16);
writeFileSync(join(delivery, 'website.zip'), Buffer.concat([...local, centralBytes, end]));
writeFileSync(join(delivery, '사용방법.txt'), `AI 바이브코딩 스쿨\n\n1. 바로 보기\n   offline-preview.html을 더블클릭하면 브라우저에서 열립니다.\n   서버·Node.js·ChatGPT 로그인 없이 화면 연습이 가능합니다.\n   파일로 열 때 클립보드·진도 저장 기능은 브라우저 보안 설정에 따라 제한될 수 있습니다.\n\n2. 다른 사람에게 공유\n   https://vibe-school-first-steps.sinjirei.chatgpt.site\n   로그인 없이 누구나 열 수 있는 공개 사이트입니다.\n\n3. 다른 호스팅에 올리기\n   website.zip을 풀고 그 안의 index.html과 assets 폴더를 함께 업로드하세요.\n   압축을 푼 폴더 안의 내용이 웹 공개 폴더의 최상위에 오면 됩니다.\n   하위 경로 배포도 지원합니다. HTTPS로 서비스하면 프롬프트 복사도 사용할 수 있습니다.\n   Node.js·서버·데이터베이스·ChatGPT 인증은 방문자에게 필요하지 않습니다.\n\n4. 소스 수정\n   ../ai-vibe-school 폴더가 원본 소스입니다.\n   npm install → npm run share 명령으로 새 배포 파일을 만드세요.\n\n5. 기존 tar.gz 파일\n   ../.deployment-archive 폴더의 tar.gz는 Sites 배포용 임시 패키지입니다.\n   평소 실행과 일반 호스팅 업로드에는 필요하지 않습니다.\n   공개 사이트도 이 로컬 압축파일을 지운다고 없어지지 않습니다.\n`);
console.log(JSON.stringify({ offline: join(delivery, 'offline-preview.html'), zip: join(delivery, 'website.zip'), files: names }));
