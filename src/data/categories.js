/**
 * Category grid items — SVG shapes described as plain objects.
 * SvgIcon renders them at display-time.
 */

const coffeeSvg = {
  paths: ['M18 8h1a4 4 0 0 1 0 8h-1', 'M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z']
};

const bookSvg = {
  paths: [
    'M4 19.5A2.5 2.5 0 0 1 6.5 17H20',
    'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'
  ]
};

const shirtSvg = {
  paths: [
    'M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z'
  ]
};

const suitcaseSvg = {
  rects: [{ x: 6, y: 3, width: 12, height: 18, rx: 2 }],
  paths: ['M12 3v-1a2 2 0 0 1 4 0v1'],
  lines: [
    { x1: 12, y1: 8, x2: 12, y2: 8 },
    { x1: 8, y1: 21, x2: 8, y2: 3 },
    { x1: 16, y1: 21, x2: 16, y2: 3 }
  ]
};

export const CATEGORIES = {
  coffee: {
    title: '☕ เครื่องดื่มที่ชอบ',
    ariaClose: 'ปิดป็อปอัพเครื่องดื่ม',
    items: [
      { title: 'Latte', desc: 'นมเยอะๆ หวานนิดๆ', stroke: '#8B6914', ...coffeeSvg },
      { title: 'Americano', desc: 'เข้มข้น ตื่นเต็มตา', stroke: '#5D4037', ...coffeeSvg },
      { title: 'Caramel Macchiato', desc: 'หวานมัน ละมุนละไม', stroke: '#E67E22', ...coffeeSvg },
      { title: 'Matcha Latte', desc: 'เขียวๆ สุขภาพดี', stroke: '#27AE60', ...coffeeSvg }
    ]
  },
  tech: {
    title: '💻 Tech Stack ที่ใช้',
    ariaClose: 'ปิดป็อปอัพ Tech Stack',
    items: [
      {
        title: 'HTML5', desc: 'โครงสร้างหลัก', stroke: '#E34F26',
        paths: ['M12 2L2 7l10 5 10-5-10-5z', 'M2 17l10 5 10-5', 'M2 12l10 5 10-5']
      },
      {
        title: 'CSS3', desc: 'สไตล์สวยงาม', stroke: '#1572B6',
        paths: ['M12 2L2 7l10 5 10-5-10-5z', 'M2 17l10 5 10-5', 'M2 12l10 5 10-5']
      },
      {
        title: 'JavaScript', desc: 'ความโต้ตอบ', stroke: '#F7DF1E',
        rects: [{ x: 2, y: 2, width: 20, height: 20, rx: 2 }],
        paths: ['M7 16v-4', 'M12 16v-4', 'M17 16v-4']
      },
      {
        title: 'React', desc: 'UI Framework', stroke: '#61DAFB',
        circles: [{ cx: 12, cy: 12, r: 3 }],
        paths: [
          'M12 2c3 3 3 17 0 20', 'M2 12c3-3 17-3 20 0',
          'M4.93 4.93c2.12 2.12 12.02 12.02 14.14 14.14',
          'M19.07 4.93c-2.12 2.12-12.02 12.02-14.14 14.14'
        ]
      }
    ]
  },
  books: {
    title: '📚 หนังสือที่ชอบ',
    ariaClose: 'ปิดป็อปอัพหนังสือ',
    items: [
      { title: 'Atomic Habits', desc: 'James Clear', stroke: '#2E8B57', ...bookSvg },
      { title: 'The Psychology of Money', desc: 'Morgan Housel', stroke: '#8B4513', ...bookSvg },
      { title: 'Deep Work', desc: 'Cal Newport', stroke: '#4A90D9', ...bookSvg },
      { title: 'Demon Slayer', desc: 'Koyoharu Gotouge', stroke: '#E0607C', ...bookSvg }
    ]
  },
  fashion: {
    title: '👕 สไตล์การแต่งตัว',
    ariaClose: 'ปิดป็อปอัพสไตล์การแต่งตัว',
    items: [
      { title: 'Streetwear', desc: 'เสื้อ oversize กางเกง cargo', stroke: '#9B59B6', ...shirtSvg },
      { title: 'Minimal', desc: 'สีพื้นเรียบๆ ดูดี', stroke: '#E0607C', ...shirtSvg },
      { title: 'Y2K', desc: 'สีสันจี๊ดจ๊าด ยุค 2000', stroke: '#4A90D9', ...shirtSvg },
      { title: 'Cozy', desc: 'ใส่สบาย อยู่บ้านก็ได้', stroke: '#27AE60', ...shirtSvg }
    ]
  },
  travel: {
    title: '✈️ สถานที่อยากไป',
    ariaClose: 'ปิดป็อปอัพสถานที่อยากไป',
    items: [
      { title: 'Kyoto, Japan', desc: 'วัด ซากุระ ชาเขียว', stroke: '#E67E22', ...suitcaseSvg },
      { title: 'Seoul, Korea', desc: 'ช้อปปิ้ง K-pop สตรีทฟู้ด', stroke: '#4A90D9', ...suitcaseSvg },
      { title: 'Switzerland', desc: 'ภูเขา ธรรมชาติ สงบ', stroke: '#27AE60', ...suitcaseSvg },
      { title: 'New York, USA', desc: 'เมืองที่ไม่เคยหลับ', stroke: '#E0607C', ...suitcaseSvg }
    ]
  }
};
