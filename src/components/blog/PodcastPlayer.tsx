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
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setAudioDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setIsFinished(true);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleReplay = () => {
    if (!audioRef.current) return;
    
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    setIsFinished(false);
    audioRef.current.play();
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (!audioRef.current) return;
    
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (!audioRef.current) return;
    
    audioRef.current.currentTime = time;
    setCurrentTime(time);
    setIsFinished(false);
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
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50"
    >
      <audio ref={audioRef} src={audioUrl} />
      
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={isFinished ? handleReplay : togglePlay}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-amber-500/20 hover:scale-105"
        >
          {isFinished ? (
            <ArrowPathIcon className="w-6 h-6 text-white" />
          ) : isPlaying ? (
            <PauseIcon className="w-6 h-6 text-white" />
          ) : (
            <PlayIcon className="w-6 h-6 text-white" />
          )}
        </button>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Episódio {episodeId}</span>
            <span>•</span>
            <span>{isFinished ? 'Clique para ouvir novamente' : durationDisplay}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-slate-700/50"
          >
            {isMuted ? (
              <SpeakerXMarkIcon className="w-5 h-5" />
            ) : (
              <SpeakerWaveIcon className="w-5 h-5" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-amber-500 hover:accent-amber-400 transition-colors"
          />
        </div>
      </div>

      <div 
        className="relative group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm text-slate-400 font-medium">{formatTime(currentTime)}</span>
          <span className="text-sm text-slate-400 font-medium ml-auto">{formatTime(audioDuration)}</span>
        </div>
        
        <div 
          ref={progressBarRef}
          className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden cursor-pointer"
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
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200"
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
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </motion.div>
  );
} 