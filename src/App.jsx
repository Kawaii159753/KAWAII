import React, { useState } from 'react';
import Card from './components/Card';
import Modal from './components/Modal';
import MusicPlayer from './components/MusicPlayer';
import CategoryGrid from './components/CategoryGrid';
import { CARDS } from './data/cards';
import { CATEGORIES } from './data/categories';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <main className="kp-box">
      <div className="kp-center">
        <h1 className="kp-title">KAWAII</h1>
        <p className="kp-sub">my favorite things ✨</p>
      </div>

      {CARDS.map((card) => (
        <Card key={card.id} card={card} onClick={setActiveModal} />
      ))}

      {/* Music Modal */}
      <Modal
        isOpen={activeModal === 'music'}
        onClose={() => setActiveModal(null)}
        modalId="music"
        title="🎧 เพลงที่ฉันชอบฟัง"
        titleId="title-music"
        closeAriaLabel="ปิดป็อปอัพเพลง"
      >
        <MusicPlayer />
      </Modal>

      {/* Category Modals */}
      {Object.entries(CATEGORIES).map(([key, cat]) => (
        <Modal
          key={key}
          isOpen={activeModal === key}
          onClose={() => setActiveModal(null)}
          modalId={key}
          title={cat.title}
          titleId={`title-${key}`}
          closeAriaLabel={cat.ariaClose}
        >
          <CategoryGrid items={cat.items} />
        </Modal>
      ))}
    </main>
  );
}
