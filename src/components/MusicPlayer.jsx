import React, { useState } from 'react';
import useAudioPlayer from '../hooks/useAudioPlayer';
import { MUSIC_CATEGORIES, MUSIC_LIST } from '../data/music';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const [activeTab, setActiveTab] = useState('thai');
  const { currentSong, isPlaying, progress, duration, status, play, seek, seekRelative } = useAudioPlayer();

  const fmt = (s) => {
    if (isNaN(s) || s < 0) return '0:00';
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  };

  const spawnNote = (el) => {
    if (!el) return;
    const r = el.getBoundingClientRect();
    const n = document.createElement('span');
    n.className = 'kp-note';
    n.textContent = '♪';
    n.style.left = `${r.left + 10}px`;
    n.style.top = `${r.top}px`;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 1200);
  };

  const handlePlay = (e, song) => {
    spawnNote(e.currentTarget.querySelector('.kp-ic'));
    play(song);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    seek((e.clientX - rect.left) / rect.width);
  };

  const handleSeekKey = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); seekRelative(5); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); seekRelative(-5); }
  };

  return (
    <>
      <div className="kp-tabs" role="tablist">
        {MUSIC_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`kp-tab ${activeTab === cat.id ? 'on' : ''}`}
            role="tab"
            aria-selected={activeTab === cat.id}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {MUSIC_CATEGORIES.map((cat) => (
        <ul key={cat.id} className={`kp-sl ${activeTab === cat.id ? 'on' : ''}`}>
          {MUSIC_LIST[cat.id]?.map((song) => {
            const active = currentSong?.id === song.id && isPlaying;
            return (
              <li
                key={song.id}
                className={`kp-si ${active ? 'play' : ''}`}
                role="button"
                tabIndex={0}
                onClick={(e) => handlePlay(e, song)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handlePlay(e, song); }
                }}
              >
                <span className="kp-ic" aria-hidden="true">▶</span>
                <div className="kp-info">
                  <p className="kp-st">{song.title}</p>
                  <p className="kp-sa">{song.artist}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ))}

      <div className="kp-bar">
        <div className="kp-np" aria-live="polite">{status}</div>
        <div className="kp-pr">
          <span className="kp-tm">{fmt(progress)}</span>
          <div
            className="kp-trk"
            role="slider"
            tabIndex={0}
            aria-label="แถบความคืบหน้าเพลง"
            onClick={handleSeek}
            onKeyDown={handleSeekKey}
          >
            <div className="kp-fill" style={{ width: `${(progress / duration) * 100}%` }} />
          </div>
          <span className="kp-tm">{fmt(duration)}</span>
        </div>
      </div>
    </>
  );
}
