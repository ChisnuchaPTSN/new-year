import { Stars } from 'lucide-react'
import { useState } from 'react'

const wishes = [
    [
        'ขอให้ทุกเช้านำพาความหวัง',
        'ทุกค่ำคืนเต็มไปด้วยความสงบ',
        'และทุกช่วงเวลาระหว่างนั้น',
        'พาเข้าใกล้ความฝันมากขึ้น',
    ],
    [
        'ขอให้ปีนี้เต็มไปด้วยรอยยิ้ม',
        'เสียงหัวเราะ และความสบายใจ',
        'มีเรื่องดี ๆ เข้ามาเรื่อย ๆ',
        'จนกลายเป็นปีที่น่าจดจำ',
    ],
    [
        'ขอให้กล้าที่จะฝัน',
        'กล้าที่จะลอง',
        'และกล้าที่จะเป็นตัวเอง',
        'ในแบบที่ภูมิใจที่สุด',
    ],
]

export default function GreetingCard() {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [wish, setWish] = useState<string[] | null>(null)
    const [isReveal, setIsReveal] = useState(false)

    const handleClick = () => {
        if (!isFlipped) {
            setIsFlipped(true)
            setIsLoading(true)
            setIsReveal(false)

            setTimeout(() => {
                const randomWish =
                    wishes[Math.floor(Math.random() * wishes.length)]
                setWish(randomWish)
                setIsLoading(false)
                setIsReveal(true)
            }, 3000)
        } else {
            // reset
            setIsFlipped(false)
            setWish(null)
            setIsReveal(false)
        }
    }

    return (
        <div className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-[2] bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
                    ข้อความพิเศษถึงคุณ
                </h2>

                <div className="perspective-1000 max-w-2xl mx-auto">
                    <div
                        className={`relative h-96 cursor-pointer transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
                            }`}
                        onClick={handleClick}
                    >
                        {/* FRONT */}
                        <div className="absolute inset-0 backface-hidden">
                            <div className="h-full bg-gradient-to-br from-purple-900/40 to-amber-900/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                                <Stars className="w-16 h-16 text-amber-400 mb-6 animate-pulse" />
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    กดรับคำอวยพร!
                                </h3>
                            </div>
                        </div>

                        {/* BACK */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180">
                            <div className="h-full bg-gradient-to-br from-amber-900/40 to-purple-900/40 backdrop-blur-xl rounded-3xl border border-amber-400/30 shadow-2xl p-8 flex flex-col items-center justify-center">
                                <Stars
                                    className={`w-14 h-14 mb-6 text-amber-400 transition-all duration-500
                    ${isReveal
                                            ? 'scale-125 drop-shadow-[0_0_30px_rgba(251,191,36,1)] animate-pulse'
                                            : 'opacity-40'
                                        }`}
                                />

                                {isLoading && (
                                    <p className="text-2xl font-bold text-white animate-pulse">
                                        กำลังจุ่ม…
                                    </p>
                                )}

                                {!isLoading && wish && (
                                    <div className="text-center space-y-3 animate-text-reveal">
                                        {wish.map((line, i) => (
                                            <p
                                                key={i}
                                                className="text-xl font-bold text-white leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
                                            >
                                                {line}
                                            </p>
                                        ))}
                                        <div className="pt-6 text-amber-400 font-bold text-xl">
                                            ✨ Happy 2026! ✨
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
