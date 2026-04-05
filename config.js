/**
 * ============================================
 *  모바일 청첩장 설정 파일
 *  이 파일만 수정하면 청첩장이 완성됩니다.
 *
 *  이미지는 설정이 필요 없습니다.
 *  아래 폴더에 1.jpg, 2.jpg, ... 순서로 넣어주세요:
 *    images/hero/1.jpg       — 메인 사진 (1장)
 *    images/story/1.jpg ...  — 스토리 사진 (자동 감지)
 *    images/gallery/1.jpg ...— 갤러리 사진 (자동 감지)
 *    images/location/1.jpg   — 오시는 길 사진 (1장)
 *    images/og/1.jpg         — OG 공유 썸네일 (1장)
 * ============================================
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "구현",
    lastName: "정",
    fullName: "정구현",
    father: "정갑용",
    mother: "심기섭",
    fatherDeceased: true, 
    motherDeceased: false,
  },

  bride: {
    name: "예솔",
    lastName: "이",
    fullName: "이예솔",
    father: "이선기",
    mother: "우근희",
    fatherDeceased: false,
    motherDeceased: false,
  },

  wedding: {
    date: "2026-06-27",        // YYYY-MM-DD
    time: "11:10",             // HH:MM (24시간)
    dayOfWeek: "토요일",
    venue: "더 컨벤션 잠실 비스타홀",
    hall: "비스타홀 3층",
    address: "서울 송파구 올림픽로 319 3층",
    tel: "02-418-5000",
    mapLinks: {
      kakao: "https://map.kakao.com/?urlX=523433.00000000105&urlY=1115645.0000000023&urlLevel=3&itemId=17651361&q=%EB%8D%94%EC%BB%A8%EB%B2%A4%EC%85%98%20%EC%9E%A0%EC%8B%A4&srcid=17651361&map_type=TYPE_MAP/",
      naver: "https://map.naver.com/p/entry/place/13355247?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604041309&locale=ko&svcName=map_pcv5/",
    },
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content:
      "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n삶의 여정 속에서 만난 소중한 인연,\n이제 평생을 함께 하려 합니다.\n\n귀한 걸음 하시어\n저희의 새 출발을 축복해 주세요.",
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content:
      "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다.",
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "정구현", bank: "국민은행", number: "838902-04-119374" },
      { role: "어머니", name: "심기섭", bank: "국민은행", number: "417202-96-118449" },
    ],
    bride: [
      { role: "신부", name: "이예솔", bank: "국민은행", number: "080802-04-095392" },
      { role: "어머니", name: "우근희", bank: "국민은행", number: "38121-0085-629" },
    ],
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    // Kakao Developers 앱키 (JavaScript 키)
    appKey: "",
    title: "정구현 ♥ 이예솔 결혼합니다",
    description: "2025년 5월 17일 토요일 오후 1시\n더 채플앳 청담",
  },

  meta: {
    title: "정구현 ♥ 이예솔 결혼합니다",
    description: "2026년 6월 27일 토요일 오전 11시 10분, 더 채플앳 청담",
  },
};
