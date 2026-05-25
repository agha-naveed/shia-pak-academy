"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Pause, RotateCcw, FastForward, Volume2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { ZIYARAT_AMEENULLAH } from "../ZIYARAT";


// ─── DATA ─────────────────────────────────────────────────────────────────────


export default function ZiyaratAmenullahPage() {
  const [fontSize, setFontSize] = useState("text-2xl");
  const [showTransliteration, setShowTransliteration] = useState(true);
  
  const router = useRouter()
  
  
  // Audio Controls State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => { if (!isDragging) setCurrentTime(audio.currentTime); };
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [isDragging]);

  const togglePlay = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.FormEvent<HTMLInputElement>) => {
    const time = Number(e.currentTarget.value);
    setCurrentTime(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  const skip = (seconds: number) => {
    if (audioRef.current) audioRef.current.currentTime += seconds;
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030102] transition-colors duration-300">
      {/* <audio   /> */}
      <audio ref={audioRef} controls className="hidden" preload="none">
        <source src={`/audio/ziyarat-e-amenullah.mp3`} />
      </audio>

      {/* ── HERO SECTION ── */}
      <section className="bg-emerald-950 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/ziyarat" className="mb-4 inline-flex items-center gap-1.5 text-sm text-emerald-200 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" onClick={() => router.push("/ziyarat")} /> Back to Ziyarats
          </Link>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Ziyarat e Ameenullah</h1>
        </div>
      </section>

      {/* ── Sticky Player ── */}
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/95 shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <button onClick={togglePlay} className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
              </button>
              <button onClick={() => skip(-10)} className="p-2 text-gray-500 hover:text-emerald-600 transition"><RotateCcw className="h-5 w-5" /></button>
              <button onClick={() => skip(10)} className="p-2 text-gray-500 hover:text-emerald-600 transition"><FastForward className="h-5 w-5" /></button>
            </div>
            
            <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4 text-gray-400" />
                <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolume} className="w-20 h-1.5 accent-emerald-600" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-400 w-10">{formatTime(currentTime)}</span>
            <input 
              type="range" min="0" max={duration || 0} value={currentTime} 
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onInput={handleSeek}
              className="w-full h-1.5 bg-gray-200 rounded-lg cursor-pointer accent-emerald-600 dark:bg-gray-700"
            />
            <span className="text-xs font-mono text-gray-400 w-10">{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="mx-auto max-w-4xl px-4 py-10">
        {ZIYARAT_AMEENULLAH.map((segment:any, index:number) => {
          if (segment.type === "note") {
            return (
              <div key={index} className="my-8 rounded-xl bg-emerald-50 px-6 py-4 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                <p className="text-center text-sm font-medium text-emerald-800 dark:text-emerald-400">
                  {segment.text}
                </p>
              </div>
            );
          }
          if (segment.type === "prostration") {
            return (
              <div key={index} className="my-8 rounded-xl bg-amber-50 px-6 py-4 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30">
                <p className="text-center italic text-amber-800 dark:text-amber-400">
                  {segment.text}
                </p>
              </div>
            );
          }
          return (
            <div key={index} className="mb-8 border-b border-gray-100 pb-8 dark:border-gray-800">
              {/* Arabic */}
              <p className={`mb-4 text-right font-arabic leading-loose text-gray-900 dark:text-white ${fontSize}`}>
                {segment.arabic}
              </p>
              {/* Transliteration */}
              {showTransliteration && (
                <p className="mb-4 italic text-gray-500 text-sm">
                  {segment.transliteration}
                </p>
              )}
              {/* Translation */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {segment.translation}
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
}