import { useEffect, useRef, useState } from 'react'

function fmt(seconds) {
  if (!Number.isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export default function BeatPlayer({ beat, isActive, onPlayRequest, onPause }) {
  const audioRef = useRef(null)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  // Mirror parent-coordinated playback state. Catching the play promise
  // keeps the UI in sync if the browser blocks autoplay.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isActive) {
      audio.play().catch(() => onPause())
    } else {
      audio.pause()
    }
  }, [isActive, onPause])

  const handleToggle = () => {
    if (isActive) onPause()
    else onPlayRequest(beat.id)
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const fraction = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    audio.currentTime = fraction * duration
    setCurrentTime(audio.currentTime)
  }

  const pct = duration ? (currentTime / duration) * 100 : 0

  return (
    <div
      className={`rounded-xl border p-4 transition-colors ${
        isActive
          ? 'border-accent/60 bg-accent/5'
          : 'border-white/10 bg-black/40 hover:border-accent/30'
      }`}
    >
      {/* type="audio/mpeg" forces audio decoding regardless of the served
          Content-Type, which matters for the .mpeg extension on disk. */}
      <audio
        ref={audioRef}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onEnded={() => onPause()}
      >
        <source src={beat.src} type="audio/mpeg" />
      </audio>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleToggle}
          aria-label={isActive ? `Pause ${beat.title}` : `Play ${beat.title}`}
          className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent text-black hover:bg-accent-soft transition-colors focus:outline-none focus:ring-2 focus:ring-accent/60"
        >
          {isActive ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 4l13 8-13 8V4z" />
            </svg>
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <div className="truncate font-display text-base text-white">
              {beat.title}
            </div>
            <div className="text-[11px] tabular-nums text-white/50">
              {fmt(currentTime)} / {fmt(duration)}
            </div>
          </div>
          {beat.note && (
            <div className="text-[11px] uppercase tracking-[0.2em] text-accent/70 mt-0.5">
              {beat.note}
            </div>
          )}
        </div>
      </div>

      <div
        role="slider"
        tabIndex={0}
        aria-label={`Seek ${beat.title}`}
        aria-valuemin={0}
        aria-valuemax={Math.max(0, Math.round(duration))}
        aria-valuenow={Math.round(currentTime)}
        onClick={handleSeek}
        className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden cursor-pointer"
      >
        <div
          className="h-full bg-accent transition-[width,box-shadow] duration-100"
          style={{
            width: `${pct}%`,
            boxShadow: isActive
              ? '0 0 12px rgba(255,140,0,0.8)'
              : '0 0 0 rgba(255,140,0,0)',
          }}
        />
      </div>
    </div>
  )
}
