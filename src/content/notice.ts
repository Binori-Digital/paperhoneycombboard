// Site-wide announcement banner. Set `notice` to null to switch it off.
// For a future holiday, change the id, dates and copy — the id change
// makes the banner reappear for visitors who dismissed a previous one.

type NoticeLocale = 'en' | 'ms' | 'zh' | 'ja' | 'ko';

export interface Notice {
  id: string;
  /** Visible from this moment (ISO 8601 with offset) */
  showFrom: string;
  /** Hidden from this moment onward — exclusive (ISO 8601 with offset) */
  showUntil: string;
  text: Record<NoticeLocale, { eyebrow: string; title: string; body: string; close: string }>;
}

export const notice: Notice | null = {
  id: 'malaysia-day-2026',
  showFrom: '2026-09-01T00:00:00+08:00',
  // Disappears at midnight Malaysia time as the holiday ends
  showUntil: '2026-09-17T00:00:00+08:00',
  text: {
    en: {
      eyebrow: 'Holiday Notice',
      title: 'Selamat Hari Malaysia!',
      body: 'We are closed on Wednesday, 16 September 2026 for Malaysia Day. We reopen on Thursday, 17 September — messages sent during the holiday will be answered then.',
      close: 'Dismiss holiday notice',
    },
    ms: {
      eyebrow: 'Notis Cuti Umum',
      title: 'Selamat Hari Malaysia!',
      body: 'Kami tutup pada hari Rabu, 16 September 2026 sempena Hari Malaysia. Kami dibuka semula pada hari Khamis, 17 September — mesej yang diterima sepanjang cuti akan dibalas pada hari tersebut.',
      close: 'Tutup notis cuti',
    },
    zh: {
      eyebrow: '假期通知',
      title: '马来西亚日快乐！',
      body: '我们将于2026年9月16日（星期三）马来西亚日休息一天，9月17日（星期四）恢复营业 — 假期期间收到的讯息将于复工后回复。',
      close: '关闭假期通知',
    },
    ja: {
      eyebrow: '休業のお知らせ',
      title: 'マレーシア・デーを祝して',
      body: '2026年9月16日（水）はマレーシア・デーのため休業いたします。9月17日（木）より通常営業いたします。休業中にいただいたメッセージには営業再開後にご返信します。',
      close: '休業のお知らせを閉じる',
    },
    ko: {
      eyebrow: '휴무 안내',
      title: '말레이시아의 날을 축하합니다',
      body: '2026년 9월 16일(수)은 말레이시아의 날로 휴무합니다. 9월 17일(목)부터 정상 영업하며, 휴무 중 받은 메시지는 영업 재개 후 답변드립니다.',
      close: '휴무 안내 닫기',
    },
  },
};
