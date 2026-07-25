import React, { useState, useRef } from 'react';
import SvgIcon from './SvgIcon';
import './Card.css';

export default function Card({ card, onClick }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);

  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    isDraggingRef.current = true;
    setIsDragging(true);
    hasMovedRef.current = false;
    startPosRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const newX = e.clientX - startPosRef.current.x;
    const newY = e.clientY - startPosRef.current.y;
    if (Math.abs(newX - position.x) > 4 || Math.abs(newY - position.y) > 4) {
      hasMovedRef.current = true;
    }
    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) {}
    if (!hasMovedRef.current) onClick(card.id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(card.id); }
  };

  const hasDragged = position.x !== 0 || position.y !== 0;

  return (
    <button
      className={`kp-card ${card.posClass} ${isDragging ? 'dragging' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
      style={{
        '--r': card.rotation,
        ...(hasDragged ? { transform: `translate(${position.x}px, ${position.y}px) rotate(${card.rotation})` } : {}),
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      aria-haspopup="dialog"
      aria-label={`${card.ariaLabel} (กดคลิกเพื่อเปิด หรือลากเพื่อย้ายตำแหน่ง)`}
    >
      <SvgIcon
        paths={card.paths}
        lines={card.lines}
        rects={card.rects}
        circles={card.circles}
        stroke={card.stroke}
        strokeWidth="2"
      />
      <span>{card.label}</span>
    </button>
  );
}
