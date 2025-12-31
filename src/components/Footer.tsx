import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4 font-bold">
          <span className="text-gray-400">สร้างด้วย</span>
          <Heart className="w-5 h-5 text-red-500 animate-pulse" />
          <span className="text-gray-400">ถึงจะใช้ AI มาช่วย</span>
        </div>

        <p className="text-gray-500 text-sm mb-6 font-bold">
          ขอให้ปีนี้เต็มไปด้วยสิ่งมหัศจรรย์ การเติบโต และพรนับไม่ถ้วนนน
        </p>

        <div className="flex justify-center gap-8 text-sm text-gray-400">
          <span className="hover:text-amber-400 transition-colors font-bold cursor-pointer">
            แบ่งปันความรู้สึก
          </span>
          <span className="hover:text-purple-400 transition-colors font-bold cursor-pointer">
            กระจายความรัก
          </span>
          <span className="hover:text-amber-400 transition-colors font-bold cursor-pointer">
            สร้างความหวัง
          </span>
        </div>

        <div className="mt-8 text-xs text-gray-600 font-bold">
          © 2026 • ลิขสิทธิ์ทั้งหมดเป็นของผมเอง Beckham eiei
        </div>
      </div>
    </footer>
  );
}
