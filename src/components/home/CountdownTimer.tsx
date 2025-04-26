import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MS_IN_DAY = 1000 * 60 * 60 * 24;

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [difference, setDifference] = useState<number>(+targetDate - +new Date());
  const [isBlinking, setIsBlinking] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const update = () => {
      const now = +new Date();
      const diff = +targetDate - now;
      setDifference(diff);

      let remainingMs: number;
      if (diff >= 0) {
        remainingMs = diff;
      } else if (Math.abs(diff) <= MS_IN_DAY) {
        // Negative countdown from 24h to 0
        remainingMs = MS_IN_DAY - Math.abs(diff);
      } else {
        remainingMs = 0;
      }

      const days = Math.floor(remainingMs / MS_IN_DAY);
      const hours = Math.floor((remainingMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remainingMs / (1000 * 60)) % 60);
      const seconds = Math.floor((remainingMs / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    update();
    const timerId = setInterval(update, 1000);
    const blinkId = setInterval(() => setIsBlinking(prev => !prev), 1000);

    return () => {
      clearInterval(timerId);
      clearInterval(blinkId);
    };
  }, [targetDate]);

  // After 24h past target, show end message
  if (difference < 0 && Math.abs(difference) > MS_IN_DAY) {
    return (
      <div className="flex justify-center mt-6">
        <span className="text-2xl sm:text-3xl md:text-4xl font-cyber mb-3 sm:mb-4 md:mb-6">
          The hackathon has ended 🏁
        </span>
      </div>
    );
  }

  const timeBoxes = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      {timeBoxes.map((box, index) => (
        <div 
          key={index}
          className="glassmorphism border border-white/20 px-3 py-2 sm:p-4 flex flex-col items-center min-w-[65px] sm:min-w-[90px] relative"
        >
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cyber font-bold">
            {String(box.value).padStart(2, '0')}
          </span>
          <span className="text-xs sm:text-sm mt-1 text-gray-400 font-cyber">
            {box.label}
          </span>
          {!isMobile && index < timeBoxes.length - 1 && (
            <span className={`hidden sm:block absolute -right-2.5 text-2xl top-1/2 transform -translate-y-1/2 ${isBlinking ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
  