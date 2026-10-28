export const prompt = `나의 첫 자기소개 홈페이지를 만들어줘.
HTML, CSS, JavaScript를 사용하고, 별도 패키지 설치 없이 index.html 파일 하나로 실행되도록 해줘.
이름은 '김바이브', 소개는 '새로운 것을 만드는 일이 즐거운 사람'으로 넣어줘.
자기소개, 세 가지 취미, 클릭하면 인사하는 버튼을 넣어줘.
초록색과 따뜻한 크림색을 사용하고 모바일에서도 보기 좋게 만들어줘.
완성 후 Windows에서 파일을 열어 확인하는 방법도 알려줘.`;
export const groups = [
  { title: '개발 환경 준비', detail: '도구를 만나고 준비해요', time: '10분' },
  { title: '내 프로젝트 폴더 열기', detail: '나만의 작업 공간을 만들어요', time: '5분' },
  { title: 'AI 코딩 도우미 실행', detail: '터미널에서 OpenCode 시작', time: '5분' },
  { title: 'AI에게 웹페이지 부탁하기', detail: '모델 선택부터 첫 프롬프트까지', time: '10분' },
  { title: '첫 웹페이지 완성하기', detail: '결과를 확인하고 내 것으로', time: '10분' },
];
export const steps = [
  { id: 'file', group: 1, target: 'file', title: '먼저, 파일 메뉴를 클릭해요', text: 'VS Code의 왼쪽 위에서 「파일」 메뉴를 찾아보세요. 새 프로젝트를 여는 첫 번째 단계예요.', action: '화면 왼쪽 위의 파일을 클릭하세요.', tip: '내 PC에서도 VS Code를 열고 같은 위치를 찾아보세요.' },
  { id: 'open', group: 1, target: 'open', title: '폴더 열기를 선택해요', text: '파일 메뉴에서 「폴더 열기…」를 선택해요. 웹페이지 파일을 담아둘 작업 공간을 정하는 거예요.', action: '펼쳐진 메뉴에서 폴더 열기를 클릭하세요.', tip: '실제 화면의 언어가 영어라면 File → Open Folder예요.' },
  { id: 'folder', group: 1, target: 'folder', title: '프로젝트 폴더를 선택해요', text: '실제 PC에서는 문서 폴더에 my-first-website라는 새 폴더를 만들고 선택하세요. 모사 화면에서는 아래 폴더를 선택해요.', action: 'my-first-website 폴더를 클릭하세요.', tip: '프로젝트란 하나의 웹사이트를 만드는 파일들을 모은 폴더예요.' },
  { id: 'terminal', group: 2, target: 'terminal', title: '터미널을 열어볼까요?', text: '터미널은 컴퓨터에게 글로 작업을 부탁하는 창이에요. 위쪽 「터미널」 메뉴를 클릭해보세요.', action: '위쪽 메뉴에서 터미널을 클릭하세요.', tip: '실제 VS Code에서는 Terminal → New Terminal을 선택하세요.' },
  { id: 'launch', group: 2, target: 'launch', title: 'OpenCode를 실행해요', text: '실제 터미널에 opencode를 입력하고 Enter를 눌러요. 아래에서는 실행 버튼을 클릭해 흐름을 연습해요.', action: '터미널의 opencode 실행을 클릭하세요.', tip: '명령어를 찾을 수 없다고 나오면 설치를 확인하고 VS Code를 다시 열어보세요.' },
  { id: 'models', group: 3, target: 'models', title: '사용할 AI 모델을 확인해요', text: 'OpenCode에 /models를 입력하면 모델을 고를 수 있어요. 무료 표시와 현재 이용 조건을 확인한 뒤 선택하세요.', action: '모델 선택 버튼을 클릭하세요.', tip: '이 실습은 모델 선택 흐름을 보여줘요. 실제 모델 목록과 비용은 공식 문서에서 확인하세요.' },
  { id: 'select', group: 3, target: 'select', title: '무료 이용 조건을 확인하고 선택', text: '실제 OpenCode에서 현재 무료로 이용 가능한 모델을 선택하세요. 무료 모델이 없거나 인증이 필요하다면 강사에게 문의하세요.', action: '모사 모델의 선택 연습 버튼을 클릭하세요.', tip: '이 화면은 교육용 예시이며 실제 모델 연결이나 과금이 발생하지 않아요.' },
  { id: 'prompt', group: 3, target: 'prompt', title: '원하는 웹페이지를 말로 설명해요', text: '오른쪽 프롬프트를 복사하고 실제 OpenCode 입력창에 붙여넣으세요. 여기서는 전송 연습 버튼으로 다음 흐름을 확인해요.', action: '프롬프트를 읽고 전송 연습을 클릭하세요.', tip: '목적, 들어갈 내용, 디자인, 실행 방법을 함께 말하면 더 구체적인 결과를 얻을 수 있어요.' },
  { id: 'result', group: 4, target: 'result', title: '첫 웹페이지를 열어봐요', text: '실제 AI가 파일을 만들면 index.html을 파일 탐색기에서 더블클릭해 브라우저로 열어요. 여기서는 제공된 예제로 결과를 확인해요.', action: 'index.html 예제 열기를 클릭하세요.', tip: '아래 예제는 미리 준비된 파일이에요. 실제 AI가 만든 결과는 조금씩 달라질 수 있어요.' },
  { id: 'finish', group: 4, target: 'finish', title: '작은 수정으로 내 것으로 만들어요', text: 'AI에게 “이름을 내 이름으로 바꿔줘”, “배경을 파란색으로 바꿔줘”라고 요청해보세요. 예제에서는 인사 버튼을 직접 눌러볼 수 있어요.', action: '예제를 살펴본 다음 학습 마치기를 클릭하세요.', tip: '화면 연습 완료와 실제 PC 실습은 별개예요. 마지막 화면에서 실제 작업을 확인해요.' },
];
export const sampleHtml = `<!doctype html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>김바이브의 첫 홈페이지</title><style>*{box-sizing:border-box}body{margin:0;background:#f5f2e9;color:#193f32;font-family:Arial,'Malgun Gothic',sans-serif;padding:40px 24px}main{max-width:620px;margin:0 auto}.label{font-size:12px;letter-spacing:3px;color:#648073}.circle{width:76px;height:76px;border-radius:50%;background:#d4e3bc;display:grid;place-items:center;font-size:34px;margin:28px 0}h1{font-size:clamp(30px,7vw,48px);letter-spacing:-2px;line-height:1.25}p{line-height:1.8;color:#60756b}.tags{display:flex;gap:8px;flex-wrap:wrap;margin:24px 0}span{border:1px solid #ccd8c7;border-radius:30px;padding:9px 14px;font-size:13px}button{border:0;background:#27664d;color:white;padding:14px 22px;border-radius:10px;cursor:pointer;font-size:15px}footer{margin-top:38px;font-size:12px;color:#819183}</style></head><body><main><div class="label">MY FIRST WEBSITE</div><div class="circle">🌱</div><h1>안녕하세요,<br>김바이브입니다.</h1><p>새로운 것을 만드는 일이 즐거운 사람.<br>오늘은 AI와 함께 나의 첫 웹페이지를 만들었어요.</p><div class="tags"><span>📷 사진 찍기</span><span>☕ 커피 한 잔</span><span>🚶 산책하기</span></div><button id="hello">나에게 인사하기 ↗</button><p id="greeting" aria-live="polite"></p><footer>작은 호기심에서 시작된 나의 첫 번째 웹사이트.</footer></main><script>document.getElementById('hello').addEventListener('click',function(){document.getElementById('greeting').textContent='반가워요! 우리 함께 새로운 것을 만들어봐요 🌿';});</script></body></html>`;
