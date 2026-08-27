/**
 * ============================================================
 *  하드코딩 목업 데이터
 * ------------------------------------------------------------
 *  ⚠️ TODO(API 연동):
 *  실제 서비스에서는 이 파일의 배열들을 사용하지 않고,
 *  DB 조회 또는 외부 API 호출로 대체합니다.
 * ============================================================
 */

// TODO(API 연동): GET /api/guild-intro 로 교체
const guildIntro = {
  title: "요아정은 이런 길드예요 🍫",
  description:
    "요아정은 '천천히, 그러나 함께' 를 지향하는 마비노기 모바일 길드입니다.\n초보자도 편하게 적응할 수 있는 분위기를 만들고,\n주 1회 정기 레이드와 자유로운 소통을 이어가고 있어요.",
  // TODO(API 연동): 실제 서비스에서는 업로드된 길드 이미지 URL 배열로 교체
  images: [
    // "/images/guild/1.jpg",
    // "/images/guild/2.jpg",
    // "/images/guild/3.jpg",
    // "/images/guild/4.jpg",
  ],
};

// TODO(API 연동): GET /api/members  ->  길드원 목록 조회로 교체
const members = [
  { id: 1, nickname: "자몽톡톡", job: "대검전사", level: 100, role: "길드장", joinDate: "2023-11-02", status: "온라인", avatar: "", intro: "레이드는 제가 이끕니다!" },
  { id: 2, nickname: "망고빙수", job: "화염술사", level: 100, role: "부길드장", joinDate: "2023-12-15", status: "온라인", avatar: "", intro: " 딜량 1등 도전 중" },
  { id: 3, nickname: "오뜨야", job: "화염술사", level: 100, role: "부길드장", joinDate: "2024-01-20", status: "오프라인", avatar: "", intro: "마법사 육성 꿀팁 물어보세요" },
];

// TODO(API 연동): GET /api/notices  ->  공지사항 목록 조회로 교체
const notices = [
  { id: 3, title: "[필독] 8월 길드 정기 레이드 일정 안내", author: "요아정길드장", date: "2026-08-24", pinned: true, content: "이번 주 토요일 저녁 9시, 길드 정기 레이드가 진행됩니다." },
  { id: 2, title: "길드 창고 정리 및 아이템 기부 안내", author: "달빛궁수", date: "2026-08-20", pinned: true, content: "길드 창고가 가득 찼습니다. 안 쓰는 재료는 기부함으로 옮겨주세요." },
  { id: 1, title: "요아정 길드 홈페이지 오픈했습니다!", author: "요아정길드장", date: "2026-08-10", pinned: false, content: "출석체크, 꿀팁 공유, 사진첩 기능을 자유롭게 이용해주세요 :)" },
];

// TODO(API 연동): GET /api/tips  ->  팁&공략 게시판 목록 조회로 교체
// TODO(API 연동): POST /api/tips ->  게시글 등록으로 교체
// TODO(API 연동): DELETE /api/tips/:id -> 게시글 삭제로 교체
const tips = [
  { id: 3, title: "초보자를 위한 골드 파밍 루트 정리", author: "자몽톡톡", date: "2026-08-23", category: "성장 공략", likes: 24, thumbnail: "/images/tips/3.jpg", content: "매일 하는 일일 던전 3종 + 필드 보스 순회 루트를 도는 것만으로도 골드 수급이 두 배로 늘어납니다." },
  { id: 2, title: "장비 강화 실패율 낮추는 꿀팁", author: "자몽톡톡", date: "2026-08-19", category: "장비/강화", likes: 41, thumbnail: "/images/tips/2.jpg", content: "강화 주문서는 이벤트 기간에 모아뒀다가 보호권과 함께 사용하는 게 훨씬 이득이에요." },
  { id: 1, title: "PvP 초반 견제 잘하는 법 (도적 기준)", author: "자몽톡톡", date: "2026-08-14", category: "전투/PvP", likes: 15, thumbnail: "/images/tips/1.jpg", content: "초반 3초 은신 활용해서 원거리 딜러부터 끊어주면 한타 승률이 확 올라갑니다." },
];

// TODO(API 연동): GET /api/photos  ->  사진 게시판 목록 조회로 교체
// TODO(API 연동): POST /api/photos (multipart/form-data) -> 사진 업로드로 교체
// TODO(API 연동): DELETE /api/photos/:id -> 사진 삭제로 교체
const photos = [
  { id: 3, title: "정기 레이드 클리어 기념샷!", author: "자몽톡톡", date: "2026-08-24", imageUrl: "/images/photos/3.jpg" },
  { id: 2, title: "길드 단체 사냥 스크린샷", author: "오뜨야", date: "2026-08-18", imageUrl: "/images/photos/2.jpg" },
  { id: 1, title: "신규 스킨 자랑!", author: "망고빙수", date: "2026-08-12", imageUrl: "/images/photos/1.jpg" },
];

// TODO(API 연동): GET /api/attendance -> 출석 현황 조회로 교체
const attendance = {
  todayChecked: false,
  monthlyCount: 14,
  streak: 5,
  ranking: [
    { rank: 1, nickname: "자몽톡톡", count: 24 },
    { rank: 2, nickname: "망고빙수", count: 22 },
    { rank: 3, nickname: "오뜨야", count: 20 }
  ],
};

// TODO(API 연동): POST /api/login -> 실제 인증 서버/DB 검증 로직으로 교체
const users = 
[
  { id: 1, username: "admin", role: "master", password: "1234", nickname: "자몽톡톡" },
  { id: 2, username: "admin1", password: "1234", role: "submaster", nickname: "망고빙수" },
  { id: 3, username: "admin2", password: "1234", role: "submaster", nickname: "오뜨야" }

];

// TODO(API 연동): GET/POST/DELETE /api/polls, POST /api/polls/:id/vote 로 교체
const polls = [
  {
    id: 2,
    title: "9월 정기 연주회 날짜 투표",
    type: "연주회",
    description: "길드 정기 연주회 날짜를 골라주세요! 다수결로 확정됩니다.",
    author: "구름위음유",
    date: "2026-08-25",
    deadline: "2026-08-29",
    options: [
      { id: 1, label: "9/5(토) 오후 8시", votes: ["요아정길드장", "딸기힐러"] },
      { id: 2, label: "9/6(일) 오후 3시", votes: ["달빛궁수"] },
      { id: 3, label: "9/12(토) 오후 8시", votes: [] },
    ],
  },
  {
    id: 1,
    title: "이번 주 어비스 진행 요일 투표",
    type: "어비스",
    description: "이번 주 어비스 같이 가실 분들, 편한 요일/시간 골라주세요.",
    author: "요아정길드장",
    date: "2026-08-24",
    deadline: "2026-08-28",
    options: [
      { id: 1, label: "8/30(토) 저녁 9시", votes: ["달빛궁수", "초코마법사", "바닐라도적"] },
      { id: 2, label: "8/31(일) 오후 3시", votes: ["딸기힐러"] },
      { id: 3, label: "8/31(일) 저녁 9시", votes: ["라떼전사", "블랙베리궁수"] },
    ],
  }
];
module.exports = { guildIntro, members, notices, tips, photos, polls, attendance, users };