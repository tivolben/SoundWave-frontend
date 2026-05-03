import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function MobileMenu() {
    return (
      <div className="fixed top-0 left-0 w-full h-screen bg-black/95 z-50 p-6">
        
        {/* Header внутри меню */}
        <div className="flex justify-between items-center mb-10">
          <div className="text-white text-2xl font-bold">SoundWave</div>

          <button
            className="text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-white text-xl text-center">
          <li onClick={() => setMenuOpen(false)}>Услуги</li>
          <li onClick={() => setMenuOpen(false)}>О нас</li>
          <li onClick={() => setMenuOpen(false)}>Портфолио</li>
          <li onClick={() => setMenuOpen(false)}>Отзывы</li>
          <li onClick={() => setMenuOpen(false)}>Контакты</li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-16 md:h-20 z-40 transition-all duration-300 ${
          scrolled ? "bg-[#060606]/90 shadow-xl" : "bg-[#060606]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          <div className="text-white text-xl md:text-2xl font-bold">
            SoundWave
          </div>

          <ul className="hidden md:flex gap-8 text-white">
            <li>Услуги</li>
            <li>О нас</li>
            <li>Портфолио</li>
            <li>Отзывы</li>
            <li>Контакты</li>
          </ul>

          <div className="flex items-center gap-4">
            
            {/* Button desktop */}
            <button className="hidden md:block px-4 py-2 bg-white text-black rounded-xl">
              Забронировать
            </button>

            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && <MobileMenu />}
    </>
  );
}