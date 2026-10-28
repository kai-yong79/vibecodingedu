# AI 바이브코딩 스쿨

코딩 완전 초보자가 VS Code·OpenCode 모사 화면을 클릭하며 자기소개 웹페이지 제작 흐름을 배우는 한국어 온라인 교육 MVP입니다.

## 실행하기
Node.js 20.19+ 또는 22.12+가 필요합니다. 터미널에서 이 폴더로 이동한 뒤:

```sh
npm install
npm run dev
```

터미널에 표시된 로컬 주소를 브라우저에서 여세요.

## 빌드
```sh
npm run build
npm run preview
```

배포 파일은 `dist` 폴더에 생성됩니다. Vercel에서는 프로젝트 루트를 이 폴더로 지정하고, 프레임워크 Vite, 빌드 명령 `npm run build`, 출력 폴더 `dist`를 사용하세요. 계정 로그인과 외부 배포가 완료된 뒤 실제 URL을 확인해야 합니다.

## 구조
- `src/App.tsx`: 홈, 준비, 클릭 교육, 완료
- `src/content.ts`: 단계 데이터, 프롬프트, 독립 실행형 HTML 예제
- `src/index.css`: 반응형 UI
- `docs/`: 계획, 요구사항, 구조, 검증, 로드맵, 발표 시나리오

## 사용 범위
로그인과 API 호출이 없으며 학습 기록은 현재 브라우저의 localStorage에만 저장됩니다. 비공개 모드·저장소 제한·기록 삭제 시 진도가 유지되지 않을 수 있습니다. 초기화는 메뉴에서 확인 후 진행합니다.

실습 화면은 교육용 시뮬레이션입니다. 실제 VS Code를 제어하거나 설치 여부·AI 실행·파일 생성 성공을 검사하지 않습니다. 제공 예제와 실제 AI 생성 결과는 구분됩니다. 예제는 HTML 파일로 다운로드하여 브라우저에서 열 수 있습니다.

공식 안내: [VS Code](https://code.visualstudio.com/download), [OpenCode 설치](https://opencode.ai/docs/), [모델 선택](https://opencode.ai/docs/models/).
