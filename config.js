/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "권순교",
    father: "권산",
    mother: "김은아",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "양채은",
    father: "양승복",
    mother: "김미라",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2027-02-27",
    time: "11:00",
    venue: "오펠리스웨딩컨벤션",
    address: "서울특별시 중구 세종대로9길 41 퍼시픽타워 20F 라비체홀",
    mapLinks: {
      kakao: "https://kko.to/-Y4FwFv_xJ",
      naver: "https://naver.me/5iTdlENB"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

// ── 예식장 안내 ──
  venueGuide: [
    {
      icon: "🅿️",
      title: "주차",
      content: "건물 내 지하주차장 3시간 무료 이용 가능합니다.\n주차장선은 축의대 반대편 정산패드를 이용 바랍니다.\n주차장 입구가 협소하오니 이용에 참고 바랍니다."
    },
    {
      icon: "🏧",
      title: "ATM 안내",
      content: "건물 내부에 ATM 기기가 없으니 참고해주시기 바랍니다."
    },
    {
      icon: "📸",
      title: "사진기록",
      content: "예식 당일 로비에서 포토부스가 운영됩니다.\n소중한 날, 환한 미소를 남겨주세요.\n남겨주신 사진과 따뜻한 한마디를 평생 소중히 간직하겠습니다."
    }
  ],

  // ── 식사 안내 ──
  mealGuide: [
    {
      icon: "🍴",
      title: "연회장 뷔페",
      content: "20층 연회장에서 1시 10분부터 2시 40분까지 식사 가능합니다.\n연회장에서 한 분 한 분 감사한 마음으로 인사드리겠습니다."
    },
    {
      icon: "👶",
      title: "유아 동행",
      content: "아기의자도 구비되어 있으니 필요하신 분들은 직원에게 말씀해 주세요."
    }
  ],

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", bank: "카카오뱅크", number: "3333-12-9049685" },
      { role: "아버지", bank: "농협은행", number: "000-00-000000" },
      { role: "어머니", bank: "국민은행", number: "000-00-000000" }
    ],
    bride: [
      { role: "신부", bank: "OO은행", number: "00000-0000-00" },
      { role: "아버지", bank: "OO은행", number: "000000-00-000000" },
      { role: "어머니", bank: "OO은행", number: "000-00-000000-0" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 권순교 ♥ 신부 양채은 결혼합니다",
    description: "2027년 2월 27일, 소중한 분들을 초대합니다."
  }
};
