export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/img/background.png')] bg-cover bg-center flex items-center justify-center mt-16">

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-4">
        
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Создаём звук, <br /> который цепляет
        </h1>

        <p className="text-white/80 text-base md:text-lg">
          Профессиональная запись, сведение и продакшн <br />
          для артистов и брендов
        </p>

        <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
          Записаться в студию
        </button>

      </div>
    </div>
  );
}