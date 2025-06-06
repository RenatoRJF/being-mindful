'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

type PodcastPlayerProps = {
  episodeId: string;
  title: string;
  durationDisplay: string;
  audioUrl: string;
};

export function PodcastPlayer({ episodeId, title, durationDisplay, audioUrl }: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (audio.readyState > 0) {
        setCurrentTime(audio.currentTime);
      }
    };

    const updateDuration = () => {
      if (audio.readyState > 0) {
        setAudioDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setIsFinished(true);
    };

    const handleError = (e: ErrorEvent) => {
      console.warn('Audio playback error:', e);
      setIsPlaying(false);
    };

    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    // Initial setup
    if (audio.readyState > 0) {
      updateDuration();
      updateTime();
    }

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    // Set initial volume
    audio.volume = volume;

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
      
      audio.pause();
      setIsPlaying(false);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.warn('Playback error:', error);
            setIsPlaying(false);
          });
        }
      }
    } catch (error) {
      console.warn('Toggle play error:', error);
      setIsPlaying(false);
    }
  };

  const handleReplay = () => {
    if (!audioRef.current) return;
    
    try {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsFinished(false);
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Replay error:', error);
          setIsPlaying(false);
        });
      }
    } catch (error) {
      console.warn('Handle replay error:', error);
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    try {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    } catch (error) {
      console.warn('Toggle mute error:', error);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (!audioRef.current) return;
    
    try {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    } catch (error) {
      console.warn('Volume change error:', error);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (!audioRef.current) return;
    
    try {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      setIsFinished(false);
    } catch (error) {
      console.warn('Seek error:', error);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-8 border border-slate-700/50"
    >
      <audio ref={audioRef} src={audioUrl} />
      
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="sm:hidden">
            <div className="flex items-center justify-between w-full">
              <button
                onClick={isFinished ? handleReplay : togglePlay}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-amber-500/20 hover:scale-105"
              >
                {isFinished ? (
                  <ArrowPathIcon className="w-5 h-5 text-white" />
                ) : isPlaying ? (
                  <PauseIcon className="w-5 h-5 text-white" />
                ) : (
                  <PlayIcon className="w-5 h-5 text-white" />
                )}
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMute}
                  className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-slate-700/50 flex items-center justify-center"
                >
                  {isMuted ? (
                    <SpeakerXMarkIcon className="w-5 h-5" />
                  ) : (
                    <SpeakerWaveIcon className="w-5 h-5" />
                  )}
                </button>
                <div className="w-24 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full accent-amber-500 hover:accent-amber-400 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop play button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={isFinished ? handleReplay : togglePlay}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-amber-500/20 hover:scale-105"
            >
              {isFinished ? (
                <ArrowPathIcon className="w-6 h-6 text-white" />
              ) : isPlaying ? (
                <PauseIcon className="w-6 h-6 text-white" />
              ) : (
                <PlayIcon className="w-6 h-6 text-white" />
              )}
            </button>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white mb-1 truncate">{title}</h3>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>Episódio {episodeId}</span>
                <span>•</span>
                <span>{isFinished ? 'Clique para ouvir novamente' : durationDisplay}</span>
              </div>
            </div>
          </div>

          {/* Mobile title and info */}
          <div className="sm:hidden text-center mt-3">
            <h3 className="text-base font-semibold text-white mb-1 truncate">{title}</h3>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <span>Episódio {episodeId}</span>
              <span>•</span>
              <span>{isFinished ? 'Clique para ouvir novamente' : durationDisplay}</span>
            </div>
          </div>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs sm:text-sm text-slate-400 font-medium w-[48px] text-right">{formatTime(currentTime)}</span>
            <div className="hidden sm:flex items-center relative group/volume ml-2 z-20">
              <button
                onClick={toggleMute}
                className="text-slate-400 group-hover/volume:text-white transition-colors p-1 rounded-full hover:bg-slate-700/50 relative flex-shrink-0"
              >
                {isMuted ? (
                  <SpeakerXMarkIcon className="w-4 h-4" />
                ) : (
                  <SpeakerWaveIcon className="w-4 h-4" />
                )}
              </button>
              <div className="w-[104px] flex items-center opacity-0 group-hover/volume:opacity-100 focus-within:opacity-100 transition-all duration-200 pointer-events-none group-hover/volume:pointer-events-auto">
                <div className="w-24 pl-2 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full accent-amber-500 hover:accent-amber-400 transition-colors relative z-30"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs sm:text-sm text-slate-400 font-medium ml-auto w-[48px]">{formatTime(audioDuration)}</span>
          </div>
          
          <div 
            ref={progressBarRef}
            className="relative h-1.5 sm:h-2 bg-slate-700/50 rounded-full overflow-hidden cursor-pointer"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/50 to-slate-600/50" />
            
            {/* Progress bar */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
              style={{ width: `${(currentTime / audioDuration) * 100}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            />
            
            {/* Hover effect */}
            <div 
              className="absolute top-0 left-0 h-full bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ width: `${(currentTime / audioDuration) * 100}%` }}
            />
            
            {/* Progress handle */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200"
              style={{ 
                left: `${(currentTime / audioDuration) * 100}%`,
                transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`,
              }}
              whileHover={{ scale: 1.3 }}
            />
          </div>
          
          {/* Hidden input for seeking */}
          <input
            type="range"
            min="0"
            max={audioDuration}
            value={currentTime}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-none group-hover:pointer-events-auto"
          />
        </div>
      </div>
    </motion.div>
  );
} 