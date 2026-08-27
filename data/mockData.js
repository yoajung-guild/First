/**
 * ============================================================
 *  하드코딩 목업 데이터
 * ------------------------------------------------------------
 *  ⚠️ TODO(API 연동):
 *  실제 서비스에서는 이 파일의 배열들을 사용하지 않고,
 *  아래처럼 DB(MySQL/MongoDB 등) 조회 또는 외부 API 호출로 대체합니다.
 *
 *    예) const members = await memberRepository.findAll();
 *    예) const notices = await fetch(`${API_BASE_URL}/notices`).then(r => r.json());
 *
 *  지금은 화면 구현 확인용으로 배열/객체에 더미 데이터를 담아 사용합니다.
 * ============================================================
 */

// TODO(API 연동): GET /api/members  ->  길드원 목록 조회로 교체
const members = [
  { id: 1, nickname: "요아정길드장", job: "전사", level: 87, role: "길드장", joinDate: "2023-11-02", status: "온라인" },
  { id: 2, nickname: "달빛궁수", job: "궁수", level: 82, role: "부길드장", joinDate: "2023-12-15", status: "온라인" },
  { id: 3, nickname: "초코마법사", job: "마법사", level: 79, role: "정예원", joinDate: "2024-01-20", status: "오프라인" },
  { id: 4, nickname: "딸기힐러", job: "힐러", level: 75, role: "정예원", joinDate: "2024-02-11", status: "온라인" },
  { id: 5, nickname: "바닐라도적", job: "도적", level: 70, role: "일반", joinDate: "2024-03-05", status: "오프라인" },
  { id: 6, nickname: "구름위음유", job: "음유시인", level: 68, role: "일반", joinDate: "2024-04-18", status: "온라인" },
  { id: 7, nickname: "라떼전사", job: "전사", level: 64, role: "일반", joinDate: "2024-05-27", status: "오프라인" },
  { id: 8, nickname: "블랙베리궁수", job: "궁수", level: 60, role: "신입", joinDate: "2024-06-30", status: "오프라인" },
];

// TODO(API 연동): GET /api/notices  ->  공지사항 목록 조회로 교체
const notices = [
  {
    id: 3,
    title: "[필독] 8월 길드 정기 레이드 일정 안내",
    author: "요아정길드장",
    date: "2026-08-24",
    pinned: true,
    content: "이번 주 토요일 저녁 9시, 길드 정기 레이드가 진행됩니다. 참여 인원은 출석체크 게시판에서 미리 체크 부탁드려요! 불참 시 사전에 쪽지 남겨주세요.",
  },
  {
    id: 2,
    title: "길드 창고 정리 및 아이템 기부 안내",
    author: "달빛궁수",
    date: "2026-08-20",
    pinned: true,
    content: "길드 창고가 가득 찼습니다. 안 쓰는 재료 아이템은 창고 기부함으로 옮겨주세요. 기부해주신 분께는 소정의 골드를 지급합니다.",
  },
  {
    id: 1,
    title: "요아정 길드 홈페이지 오픈했습니다!",
    author: "요아정길드장",
    date: "2026-08-10",
    pinned: false,
    content: "길드원들의 친목 도모를 위해 홈페이지를 만들었습니다. 출석체크, 꿀팁 공유, 사진첩 기능을 자유롭게 이용해주세요 :)",
  },
];

// TODO(API 연동): GET /api/tips  ->  꿀팁 게시판 목록 조회로 교체
// TODO(API 연동): POST /api/tips ->  꿀팁 게시글 등록으로 교체
const tips = [
  {
    id: 3,
    title: "초보자를 위한 골드 파밍 루트 정리",
    author: "바닐라도적",
    date: "2026-08-23",
    category: "성장 공략",
    likes: 24,
    content: "매일 하는 일일 던전 3종 + 필드 보스 순회 루트를 도는 것만으로도 골드 수급이 두 배로 늘어납니다. 자세한 동선은 첨부한 지도 참고!",
  },
  {
    id: 2,
    title: "장비 강화 실패율 낮추는 꿀팁",
    author: "초코마법사",
    date: "2026-08-19",
    category: "장비/강화",
    likes: 41,
    content: "강화 주문서는 이벤트 기간에 모아뒀다가 보호권과 함께 사용하는 게 훨씬 이득이에요. 강화 확률 버프 시간대도 체크하세요!",
  },
  {
    id: 1,
    title: "PvP 초반 견제 잘하는 법 (도적 기준)",
    author: "라떼전사",
    date: "2026-08-14",
    category: "전투/PvP",
    likes: 15,
    content: "초반 3초 은신 활용해서 원거리 딜러부터 끊어주면 한타 승률이 확 올라갑니다.",
  },
];

// TODO(API 연동): GET /api/photos  ->  사진 게시판 목록 조회로 교체
// TODO(API 연동): POST /api/photos (multipart/form-data) -> 사진 업로드로 교체
const photos = [
  { id: 3, title: "정기 레이드 클리어 기념샷!", author: "딸기힐러", date: "2026-08-24", imageUrl: "/images/sample1.jpg" },
  { id: 2, title: "길드 단체 사냥 스크린샷", author: "구름위음유", date: "2026-08-18", imageUrl: "/images/sample2.jpg" },
  { id: 1, title: "신규 스킨 자랑!", author: "블랙베리궁수", date: "2026-08-12", imageUrl: "/images/sample3.jpg" },
];

// TODO(API 연동): GET /api/attendance?month=YYYY-MM -> 이번 달 출석 현황 조회로 교체
// TODO(API 연동): POST /api/attendance -> 출석체크 기록(오늘 날짜, 로그인 유저) 등록으로 교체
const attendance = {
  todayChecked: false, // 로그인한 유저의 오늘 출석 여부 (실제로는 세션 유저 기준으로 서버에서 계산)
  monthlyCount: 14, // 이번 달 누적 출석 일수
  streak: 5, // 연속 출석일
  ranking: [
    { rank: 1, nickname: "자몽톡톡", count: 24 },
    { rank: 2, nickname: "망고빙수", count: 24 },
    { rank: 3, nickname: "오뜨야", count: 20 },
    { rank: 4, nickname: "사생", count: 18 },
  ],
};

// TODO(API 연동): POST /api/login -> 실제 인증 서버/DB 검증 로직으로 교체
const users = [
  { id: 1, username: "admin", password: "1234", nickname: "자몽톡톡(길드마스터)" },
  { id: 2, username: "admin", password: "1234", nickname: "망고빙수(부길드마스터)" },
  { id: 3, username: "admin", password: "1234", nickname: "오뜨야(부길드마스터)" },
  { id: 4, username: "user1", password: "1111", nickname: "사생" },
];

module.exports = { members, notices, tips, photos, attendance, users };
