"use client";

import { useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";

export function AppFlowSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="band-cream app-flow" data-reveal>
      <div className="wrap app-flow-grid">
        <div className="app-flow-video">
          <div className="app-flow-screen">
            <video
              ref={videoRef}
              className="app-flow-media"
              poster="/hero/evidence.jpg"
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            >
              <source src="/sections/app-flow.mp4" type="video/mp4" />
            </video>
            <button
              type="button"
              className="app-flow-play"
              aria-label={playing ? t.platform.pauseVideo : t.platform.playVideo}
              onClick={togglePlay}
            >
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M4 3h3v10H4zm5 0h3v10H9z" fill="currentColor" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M5 3.5v9l8-4.5-8-4.5z" fill="currentColor" />
                </svg>
              )}
            </button>
            <div className="app-flow-video-meta">
              <span>{t.platform.videoLabel}</span>
              <strong>{t.platform.videoTitle}</strong>
            </div>
          </div>
          <p className="app-flow-hint">{t.platform.videoHint}</p>
        </div>

        <div className="app-flow-copy">
          <p className="kicker">{t.platform.evidenceKicker}</p>
          <h2>{t.platform.evidenceTitle}</h2>
          <p className="lede">{t.platform.lede}</p>

          <div className="app-flow-sides">
            <article>
              <p className="app-flow-side-label">{t.platform.frontendLabel}</p>
              <ol>
                {t.platform.frontend.map((item, index) => (
                  <li key={item.name}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
            <article>
              <p className="app-flow-side-label">{t.platform.backendLabel}</p>
              <ol>
                {t.platform.backend.map((item, index) => (
                  <li key={item.name}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
