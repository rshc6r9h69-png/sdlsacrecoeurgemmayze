import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Film, Clock, ExternalLink, RotateCcw } from 'lucide-react';
import { FoulardIcon } from './FoulardIcon';

interface VideoPlayerProps {
  src?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  poster: string;
  title: string;
  duration?: string;
  isPending?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  youtubeId,
  youtubeUrl,
  poster,
  title,
  duration,
  isPending = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [useLocalVideo, setUseLocalVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const directYoutubeLink = youtubeUrl || (youtubeId ? `https://youtu.be/${youtubeId}` : '');

  // If Troupe video is pending and has neither youtubeId nor src
  if (isPending && !youtubeId && !src) {
    return (
      <div className="w-full rounded-2xl overflow-hidden bg-stone-900 border-2 border-yellow-500 shadow-xl shadow-black/20 group">
        <div className="relative aspect-video w-full bg-stone-950 overflow-hidden flex items-center justify-center">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover filter brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-yellow-400 text-stone-950 flex items-center justify-center shadow-lg mb-3">
              <Clock className="w-7 h-7" />
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-white mb-1.5 flex items-center gap-2">
              <FoulardIcon size={20} />
              <span>Vidéo à venir</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-200 max-w-md mb-4">
              La vidéo de cette branche sera ajoutée très prochainement par la maîtrise.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Handle local video playback controls
  const togglePlayLocal = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        }
      });
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-stone-900 border-2 border-yellow-500 shadow-xl shadow-black/20 group">
      {/* 16:9 Video Container */}
      <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
        {isPlaying ? (
          // Active Playing State: YouTube iframe or Native video
          youtubeId && !useLocalVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={title}
              className="w-full h-full border-0 absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              <video
                ref={videoRef}
                src={src}
                poster={poster}
                playsInline
                preload="auto"
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlayLocal}
              />
              {/* Bottom Controls for local player */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white text-xs sm:text-sm">
                <span className="font-semibold truncate max-w-[65%]">{title}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlayLocal}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Pause className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )
        ) : (
          // Unplayed State: Cover Poster with YouTube badge & Big Play button
          <>
            <img
              src={poster}
              alt={title}
              className="w-full h-full object-cover cursor-pointer filter brightness-[0.85] group-hover:brightness-95 transition-all duration-300 group-hover:scale-102"
              onClick={() => {
                setIsPlaying(true);
                if (useLocalVideo && videoRef.current) {
                  videoRef.current.play();
                }
              }}
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/15 transition-colors pointer-events-none"
              onClick={() => setIsPlaying(true)}
            />

            {/* Big Play Button with YouTube accent */}
            <button
              type="button"
              onClick={() => {
                setIsPlaying(true);
                if (useLocalVideo && videoRef.current) {
                  videoRef.current.play();
                }
              }}
              aria-label={`Lire la vidéo YouTube : ${title}`}
              className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/95 hover:bg-red-500 text-white border-2 border-yellow-300 flex items-center justify-center shadow-2xl shadow-black/70 transform hover:scale-110 active:scale-95 transition-all cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white" />
            </button>

            {/* Bottom Title & Duration preview */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
              <div className="flex items-center justify-between text-white text-xs sm:text-sm">
                <div className="flex items-center gap-2 max-w-[75%] truncate">
                  <Film className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="font-bold truncate">{title}</span>
                </div>
                {duration && (
                  <span className="text-[11px] text-yellow-200 bg-black/60 border border-yellow-500/50 px-2 py-0.5 rounded-full font-mono tabular-nums shrink-0">
                    {duration}
                  </span>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Video Footer Bar with Playback State & Direct YouTube Link */}
      <div className="px-4 py-2.5 bg-green-950 border-t border-green-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-200">
        <div className="flex items-center gap-2">
          <FoulardIcon size={16} />
          <span className="text-yellow-300 font-semibold truncate max-w-[200px] sm:max-w-none">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {isPlaying && (
            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                if (videoRef.current) {
                  videoRef.current.pause();
                }
              }}
              className="inline-flex items-center gap-1 text-[11px] text-stone-300 hover:text-white underline cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Fermer le lecteur</span>
            </button>
          )}

          {src && youtubeId && (
            <button
              type="button"
              onClick={() => {
                setUseLocalVideo(!useLocalVideo);
                setIsPlaying(false);
              }}
              className="text-[11px] text-yellow-200 hover:underline cursor-pointer"
            >
              {useLocalVideo ? 'Mode YouTube' : 'Mode Fichier MP4'}
            </button>
          )}

          {directYoutubeLink && (
            <a
              href={directYoutubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600/90 hover:bg-red-500 text-white font-bold text-[11px] shadow-sm transition-colors cursor-pointer"
              title="Regarder directement sur YouTube"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
