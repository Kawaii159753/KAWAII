import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useAudioPlayer — encapsulates all audio state management.
 * Returns state + controls, zero DOM manipulation.
 */
export default function useAudioPlayer() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(180);
  const [status, setStatus] = useState('🎵 ยังไม่ได้เลือกเพลง');

  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    setIsPlaying(false);
    cleanup();
    setCurrentSong(null);
    setStatus('🎵 ยังไม่ได้เลือกเพลง');
    setProgress(0);
  }, [cleanup]);

  const startFallback = useCallback((dur = 180) => {
    setDuration(dur);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= dur) { stop(); return 0; }
        return p + 1;
      });
    }, 1000);
  }, [stop]);

  const play = useCallback((song) => {
    // Toggle off if same song
    if (currentSong?.id === song.id && isPlaying) { stop(); return; }

    cleanup();
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
    setStatus(`🎵 ${song.title} — ${song.artist || 'ไม่ระบุ'}`);

    if (song.src) {
      const audio = new Audio(song.src);
      audioRef.current = audio;

      audio.addEventListener('loadedmetadata', () => setDuration(Math.floor(audio.duration)));
      audio.addEventListener('timeupdate', () => setProgress(Math.floor(audio.currentTime)));
      audio.addEventListener('ended', () => stop());

      audio.play().catch(() => {
        setStatus(`⚠️ ${song.title} — ${song.artist || 'ไม่ระบุ'} (จำลองการเล่น)`);
        startFallback(180);
      });
    } else {
      startFallback(180);
    }
  }, [currentSong, isPlaying, cleanup, stop, startFallback]);

  const seek = useCallback((fraction) => {
    const target = Math.max(0, Math.min(1, fraction)) * duration;
    if (audioRef.current?.duration) {
      audioRef.current.currentTime = target;
    } else {
      setProgress(Math.round(target));
    }
  }, [duration]);

  const seekRelative = useCallback((delta) => {
    const target = Math.max(0, Math.min(duration, progress + delta));
    if (audioRef.current) audioRef.current.currentTime = target;
    else setProgress(target);
  }, [duration, progress]);

  // Cleanup on unmount
  useEffect(() => cleanup, [cleanup]);

  return { currentSong, isPlaying, progress, duration, status, play, stop, seek, seekRelative };
}
