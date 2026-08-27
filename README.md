# 요아정 길드 웹뷰

마비노기 모바일 길드 **요아정**의 길드원 친목 도모 및 공지사항 관리를 위한
반응형(모바일/PC) 웹뷰 프로젝트입니다. Node.js + Express + EJS로 제작되었습니다.

## 실행 방법

```bash
npm install
npm start
```

브라우저에서 http://localhost:3000 접속

- 테스트 계정: `guildmaster` / `1234`

## 기능

| 기능 | 경로 | 설명 |
|---|---|---|
| 로그인/로그아웃 | `/login` | 세션 기반 인증 |
| 홈(대시보드) | `/` | 공지, 출석, 꿀팁, 사진 요약 |
| 출석체크 | `/attendance` | 출석 체크 + 출석왕 랭킹 |
| 공지사항 | `/notice`, `/notice/:id` | 목록 및 상세 |
| 꿀팁 게시판 | `/tips` | 목록 조회 + 등록 |
| 사진 게시판 | `/photos` | 목록 조회 + 등록 |
| 길드원 리스트 | `/members` | 길드원 카드 목록 |

## 현재 구현 상태 (하드코딩)

지금은 `data/mockData.js` 안의 배열/객체를 목업 DB처럼 사용하고 있습니다.
실제 서비스에 연결할 때 손대야 할 자리는 코드 안에 모두
`// TODO(API 연동): ...` 주석으로 표시해 두었습니다.

주요 교체 지점:

- `data/mockData.js` — 전체 목업 데이터 (members, notices, tips, photos, attendance, users)
- `server.js`
  - `POST /login` — 실제 인증 API로 교체
  - `GET /` — 홈 화면에 필요한 데이터 API 호출로 교체
  - `GET/POST /attendance*` — 출석 조회/등록 API로 교체
  - `GET /notice`, `GET /notice/:id` — 공지 조회 API로 교체
  - `GET/POST /tips` — 꿀팁 게시판 조회/등록 API로 교체
  - `GET/POST /photos` — 사진 게시판 조회/등록(실제로는 파일 업로드, multer 등 필요) API로 교체
  - `GET /members` — 길드원 목록 API로 교체

## 폴더 구조

```
yoajeong-guild/
├── server.js              # Express 라우팅
├── data/
│   └── mockData.js        # 하드코딩 목업 데이터 (API 연동 지점 주석 포함)
├── views/
│   ├── partials/          # header / nav(사이드바+하단탭바) / footer
│   ├── login.ejs
│   ├── index.ejs          # 홈 대시보드
│   ├── attendance.ejs
│   ├── notice.ejs
│   ├── notice_detail.ejs
│   ├── tips.ejs
│   ├── photos.ejs
│   └── members.ejs
└── public/
    ├── css/style.css      # 핑크 + 초콜릿 브라운 톤 테마, 반응형
    └── js/main.js
```

## 반응형 동작

- **PC(861px 이상)**: 좌측 고정 사이드바 내비게이션
- **모바일(860px 이하)**: 하단 탭바 내비게이션, 카드/그리드 1~2열로 재배치
