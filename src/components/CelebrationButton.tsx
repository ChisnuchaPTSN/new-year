import { PartyPopper } from 'lucide-react'
import { useState, useRef } from 'react'

interface Firework {
    id: number
    x: number
    y: number
}

export default function CelebrationButton() {
    const [fireworks, setFireworks] = useState<Firework[]>([])
    const [isAnimating, setIsAnimating] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)


    const celebrate = () => {
        setIsAnimating(true)

        if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play()
    }

        const newFireworks: Firework[] = []
        for (let i = 0; i < 18; i++) {
            newFireworks.push({
                id: Date.now() + i,
                x: Math.random() * 100,
                y: Math.random() * 70,
            })
        }

        setFireworks(newFireworks)

        setTimeout(() => {
            setFireworks([])
            setIsAnimating(false)
        }, 6000)
    }

    return (
        <div
            className="
            relative overflow-hidden py-28 px-4
            bg-gradient-to-b from-black via-[#1a001f] to-black
            "
        >
            <audio ref={audioRef} src="/sound/mixkit.mp3" preload="auto" />
            {/* 🔴 Red fog / Upside Down glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,80,0.15),transparent_65%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(120,0,255,0.15),transparent_70%)]" />

            {/* Floating particles (เหมือนฝุ่นใน Upside Down) */}
            {isAnimating &&
                [...Array(28)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bottom-0 w-1 h-1 rounded-full bg-red-500/40 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}

            {/* Fireworks (ปรับสีให้เป็น neon แดง/ม่วง) */}
            {fireworks.map((fw) => (
                <div
                    key={fw.id}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${fw.x}%`,
                        top: `${fw.y}%`,
                    }}
                >
                    <div className="relative">
                        {[...Array(10)].map((_, i) => {
                            const hue = 330 + Math.random() * 40 // 🔴 neon red-pink
                            return (
                                <div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full animate-firework"
                                    style={{
                                        background: `hsl(${hue}, 100%, 65%)`,
                                        boxShadow: `0 0 18px hsl(${hue}, 100%, 65%)`,
                                        transform: `rotate(${i * 36}deg) translateY(-55px)`,
                                        animationDelay: `${Math.random() * 0.3}s`,
                                    }}
                                />
                            )
                        })}
                    </div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2
                    className="
                    text-4xl md:text-5xl font-extrabold mb-6
                    text-white
                    tracking-wider
                    drop-shadow-[0_0_20px_rgba(255,0,80,0.9)]
                    "
                >
                    พร้อมฉลองหรือยัง?
                </h2>

                <p className="text-xl font-bold text-red-200/90 mb-14">
                    ปล่อยให้ความสุขระเบิดออกมา
                </p>

                <button
                    onClick={celebrate}
                    disabled={isAnimating}
                    className="
                    cursor-pointer group relative px-12 py-5
                    rounded-full font-bold text-xl text-white
                    bg-gradient-to-r from-red-700 via-pink-600 to-purple-700
                    overflow-hidden
                    transition-all duration-300
                    hover:scale-110
                    hover:shadow-[0_0_45px_rgba(255,0,80,0.8)]
                    disabled:opacity-50
                    "
                >
                    <span className="relative z-10 flex items-center gap-3">
                        <PartyPopper className="w-6 h-6" />
                        ฉลอง
                    </span>

                    {/* Neon sweep */}
                    <div
                        className="
                        absolute inset-0 -translate-x-full
                        bg-gradient-to-r from-transparent via-white/40 to-transparent
                        group-hover:translate-x-full
                        transition-transform duration-700
                        "
                    />
                </button>

                {isAnimating && (
                    <div
                        className="
                        mt-16 text-3xl md:text-4xl font-bold
                        text-red-400
                        animate-text-reveal
                        tracking-widest
                        drop-shadow-[0_0_30px_rgba(255,0,80,1)]
                        "
                    >
                        Happy New Year 2026!
                    </div>
                )}
            </div>
        </div>
    )
}
