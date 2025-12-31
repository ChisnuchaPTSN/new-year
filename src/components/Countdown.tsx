import { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, icon: Calendar },
    { label: 'Hours', value: timeLeft.hours, icon: Clock },
    { label: 'Minutes', value: timeLeft.minutes, icon: Clock },
    { label: 'Seconds', value: timeLeft.seconds, icon: Clock },
  ];

  return (
    <div className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent leading-[1.5]">
            มานับถอยหลังสู่ปี 2026 ไปด้วยกัน!
          </h2>
          <p className="text-gray-300 font-bold">อนาคตอยู่ใกล้แค่เอื้อมมม</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="bg-gradient-to-br from-purple-900/30 to-amber-900/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <unit.icon className="w-6 h-6 text-amber-400 mx-auto mb-3" />
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 tabular-nums">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-purple-300 uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
