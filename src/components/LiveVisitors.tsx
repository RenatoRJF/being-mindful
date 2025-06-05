'use client';

import { UserGroupIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';

// Time periods and their visitor distribution (percentages of daily total)
const TIME_PERIODS = [
  { start: 0, end: 6, percentage: 0.05 },    // Midnight to 6 AM: 5% (1,300)
  { start: 6, end: 9, percentage: 0.10 },    // 6 AM to 9 AM: 10% (2,600)
  { start: 9, end: 12, percentage: 0.15 },   // 9 AM to 12 PM: 15% (3,900)
  { start: 12, end: 14, percentage: 0.20 },  // 12 PM to 2 PM: 20% (5,200)
  { start: 14, end: 17, percentage: 0.15 },  // 2 PM to 5 PM: 15% (3,900)
  { start: 17, end: 20, percentage: 0.25 },  // 5 PM to 8 PM: 25% (6,500)
  { start: 20, end: 24, percentage: 0.10 },  // 8 PM to Midnight: 10% (2,600)
];

const DAILY_TOTAL = 26000;
const UPDATE_INTERVAL = 8000; // 8 seconds
const MAX_CHANGE_PERCENTAGE = 0.08; // Maximum 8% change per update
const MIN_CHANGE_PERCENTAGE = 0.02; // Minimum 2% change per update

function getCurrentPeriod() {
  const hour = new Date().getHours();
  return TIME_PERIODS.find(period => hour >= period.start && hour < period.end) || TIME_PERIODS[0];
}

function formatVisitorCount(count: number, isMobile: boolean = false): string {
  if (isMobile && count >= 1000) {
    return `${Math.floor(count / 1000)}k+`;
  }
  return Math.round(count).toLocaleString('pt-BR');
}

function getBaseVisitorCount(): number {
  const period = getCurrentPeriod();
  const now = new Date();
  const periodStart = new Date(now);
  periodStart.setHours(period.start, 0, 0, 0);
  const periodEnd = new Date(now);
  periodEnd.setHours(period.end, 0, 0, 0);
  
  // Calculate how far we are into the current period (0 to 1)
  const periodDuration = periodEnd.getTime() - periodStart.getTime();
  const timeInPeriod = now.getTime() - periodStart.getTime();
  const progressInPeriod = timeInPeriod / periodDuration;
  
  // Calculate the base count for this period
  const periodTotal = DAILY_TOTAL * period.percentage;
  const hourlyRate = periodTotal / (period.end - period.start);
  
  // Add some randomness to make it look more natural
  const randomFactor = 0.95 + (Math.random() * 0.1); // Random factor between 0.95 and 1.05
  
  // Calculate the exact count based on time in period and random factor
  const exactCount = hourlyRate * (1 + progressInPeriod) * randomFactor;
  
  return exactCount;
}

function getNextVisitorCount(currentCount: number, targetCount: number): number {
  // Calculate the maximum allowed change
  const maxChange = currentCount * MAX_CHANGE_PERCENTAGE;
  const minChange = currentCount * MIN_CHANGE_PERCENTAGE;
  
  // Calculate the difference to the target
  const difference = targetCount - currentCount;
  
  // Determine the direction and magnitude of change
  const direction = difference > 0 ? 1 : -1;
  const changeMagnitude = Math.min(Math.abs(difference), maxChange);
  
  // Ensure minimum change if we're not at the target
  const finalChange = Math.max(minChange, changeMagnitude) * direction;
  
  // Calculate new count, ensuring it doesn't go below 0
  const newCount = Math.max(0, currentCount + finalChange);
  
  // If we're very close to the target, just use the target
  if (Math.abs(difference) < minChange) {
    return targetCount;
  }
  
  return newCount;
}

export function LiveVisitors() {
  const [visitorCount, setVisitorCount] = useState(0);
  const targetCountRef = useRef(getBaseVisitorCount());

  useEffect(() => {
    // Set initial count based on current time period
    const initialCount = getBaseVisitorCount();
    setVisitorCount(initialCount);
    targetCountRef.current = initialCount;

    // Update count periodically with realistic fluctuations
    const interval = setInterval(() => {
      // Update target count based on time period
      targetCountRef.current = getBaseVisitorCount();
      
      setVisitorCount(current => {
        return getNextVisitorCount(current, targetCountRef.current);
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:block fixed bottom-32 left-8 z-[1000]">
        <div className="relative">
          <div className="bg-slate-800/80 backdrop-blur-sm border border-amber-500/20 rounded-lg p-3 shadow-lg">
            <div className="flex items-center gap-3">
              {/* Animated icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-ping" />
                <div className="relative w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <UserGroupIcon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Visitor count */}
              <div className="flex flex-col">
                <span className="text-xs text-slate-300 font-medium">Visitantes agora</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-amber-400">
                    {formatVisitorCount(visitorCount, false)}
                  </span>
                  <span className="text-xs text-slate-300">pessoas</span>
                </div>
              </div>

              {/* Live indicator */}
              <div className="flex items-center gap-1.5 ml-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-xs text-amber-400 font-medium">ao vivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version - minimalist */}
      <div className="md:hidden fixed bottom-24 left-0 z-[1000]">
        <div className="relative">
          <div className="bg-slate-800/90 backdrop-blur-sm border border-amber-500/20 border-l-0 rounded-r-full px-4 py-1.5 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-ping" />
                <div className="relative w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <UserGroupIcon className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-amber-400">{formatVisitorCount(visitorCount, true)}</span>
                  <span className="w-1 h-1 bg-amber-400 rounded-full animate-pulse" />
                </div>
                <span className="text-[10px] text-slate-300 font-medium leading-none mt-0.5">Visitantes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 