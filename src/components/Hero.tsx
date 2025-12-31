import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-amber-900/30 animate-gradient-shift" />

            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-twinkle" />
                <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-twinkle-delay-1" />
                <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-amber-300 rounded-full animate-twinkle-delay-2" />
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-twinkle" />
                <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-amber-500 rounded-full animate-twinkle-delay-1" />
                <div className="absolute top-60 left-1/3 w-1 h-1 bg-purple-500 rounded-full animate-twinkle-delay-2" />
            </div>

            <div className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                    <span className="text-sm text-amber-300 font-medium">This is a little wish from me, Beckham.</span>
                    <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                </div>

                <h1
                    className="
    text-5xl md:text-7xl lg:text-8xl
    font-bold
    mb-8
    leading-tight
    tracking-wide
    bg-gradient-to-r from-amber-300 via-purple-400 to-amber-300
    bg-clip-text text-transparent
    animate-gradient-text
    drop-shadow-[0_0_30px_rgba(251,191,36,0.45)]
    
  "
                >
                    Happy New Year 2026!
                </h1>


                <p className="text-sm md:text-2xl text-gray-200 max-w-2xl mx-auto mb-9 font-bold">
                    ขอให้ปี 2026 เป็นปีที่เต็มไปด้วยรอยยิ้มเล็กๆในทุกๆวัน<br />
                    ขอให้มีความสุขเข้ามาเรื่อยๆ และมีช่วงเวลาดีๆ<br />
                    ให้เผลอยิ้มทุกครั้งที่นึกถึงตลอดทั้งปี<br />

                </p>

                <p className="text-sm md:text-xl text-purple-300/80 italic">
                    Cheers to new beginnings and magical adventures ahead!
                </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
    );
}
