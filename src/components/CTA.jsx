export default function CTA() {
  return (
    <div className="bg-[#060606] w-full max-w-6xl mx-auto px-4 py-16">

      <div className="border border-[#1E1E1E] rounded-xl flex flex-col items-center text-center gap-6 px-6 py-12">

        <h2 className="text-white font-semibold text-3xl md:text-5xl leading-tight">
          Готов записать свой трек? <br />
          Сделай звук профессиональным. <br />
          Запишись в студию уже сегодня
        </h2>

        <p className="text-white/80 text-base md:text-2xl">
          Забронируй студию и начни создавать музыку уже сегодня <br />
          Мы поможем довести твой трек до релиза
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
          Забронировать сейчас
        </button>

      </div>

    </div>
  );
}