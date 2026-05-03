export default function Footer() {
  return (
    <footer className="w-full bg-[#040404] py-10">

      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">

        <div className="text-white text-2xl font-bold text-center md:text-left">
          SoundWave
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">

          <div className="text-white text-sm md:text-base space-y-2">
            <p className="font-semibold mb-2">Контакты:</p>
            <p>Телефон: +49 123 456 789</p>
            <p>Email: soundwave@gmail.com</p>
          </div>

          <div className="text-white text-sm md:text-base space-y-2">
            <p className="font-semibold mb-2">Соцсети:</p>
            <p>Instagram</p>
            <p>YouTube</p>
            <p>Telegram</p>
          </div>

        </div>

      </div>

    </footer>
  );
}