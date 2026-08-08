/**
 * Card definitions — SVG paths stored as serializable strings.
 * Matching the exact stroke colors from the visual design image.
 */
export const CARDS = [
  {
    id: 'music',
    posClass: 'kp-hp',
    label: 'หูฟัง',
    rotation: '0deg',
    stroke: '#E04D6C',
    ariaLabel: 'เปิดหมวดหมู่หูฟังและเพลงที่ชอบ',
    paths: [
      'M3 18v-6a9 9 0 0 1 18 0v6',
      'M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z'
    ]
  },
  {
    id: 'coffee',
    posClass: 'kp-cf',
    label: 'กาแฟ',
    rotation: '5deg',
    stroke: '#8C6212',
    ariaLabel: 'เปิดหมวดหมู่เครื่องดื่มกาแฟ',
    paths: [
      'M18 8h1a4 4 0 0 1 0 8h-1',
      'M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'
    ],
    lines: [
      { x1: 6, y1: 1, x2: 6, y2: 4 },
      { x1: 10, y1: 1, x2: 10, y2: 4 },
      { x1: 14, y1: 1, x2: 14, y2: 4 }
    ]
  },
  {
    id: 'tech',
    posClass: 'kp-lp',
    label: 'คอมพิวเตอร์',
    rotation: '-4deg',
    stroke: '#2D82E0',
    ariaLabel: 'เปิดหมวดหมู่คอมพิวเตอร์และ Tech Stack',
    rects: [{ x: 2, y: 3, width: 20, height: 14, rx: 2 }],
    lines: [
      { x1: 2, y1: 20, x2: 22, y2: 20 },
      { x1: 8, y1: 23, x2: 16, y2: 23 }
    ]
  },
  {
    id: 'books',
    posClass: 'kp-bk',
    label: 'หนังสือ',
    rotation: '-6deg',
    stroke: '#1E873C',
    ariaLabel: 'เปิดหมวดหมู่หนังสือเล่มโปรด',
    paths: [
      'M4 19.5A2.5 2.5 0 0 1 6.5 17H20',
      'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'
    ]
  },
  {
    id: 'fashion',
    posClass: 'kp-cl',
    label: 'เสื้อผ้า',
    rotation: '6deg',
    stroke: '#8A3BB0',
    ariaLabel: 'เปิดหมวดหมู่เสื้อผ้าและสไตล์',
    paths: [
      'M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z'
    ]
  },
  {
    id: 'travel',
    posClass: 'kp-lg',
    label: 'กระเป๋าเดินทาง',
    rotation: '0deg',
    stroke: '#E06B00',
    ariaLabel: 'เปิดหมวดหมู่กระเป๋าเดินทางและสถานที่เที่ยว',
    rects: [{ x: 6, y: 3, width: 12, height: 18, rx: 2 }],
    paths: ['M12 3v-1a2 2 0 0 1 4 0v1'],
    lines: [
      { x1: 12, y1: 8, x2: 12, y2: 8 },
      { x1: 8, y1: 21, x2: 8, y2: 3 },
      { x1: 16, y1: 21, x2: 16, y2: 3 }
    ]
  }
];
