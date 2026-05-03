const utilitiesList = [
     {heading: "Запись вокала", text: "Чистый и качественный звук с профессиональной обработкой", img: '/img/card-1.png'},
      {heading: "Сведение и мастеринг", text: "Сделаем ваш трек громким, чистым и готовым к релизу", img: '/img/card-2.png'},
       {heading: "Создание битов", text: "Уникальные биты под ваш стиль и настроение", img: '/img/card-3.png'}, 
       {heading: "Продюсирование", text: "Поможем довести идею до полноценного трека", img: '/img/card-4.png'},
     ]


export default function Utilities() {
  return (
    <div className="bg-[#060606] w-full max-w-6xl mx-auto px-4 py-16" id="utilities">

      <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-12">
        Услуги
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {utilitiesList.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.img})` }}
            className="relative h-96 bg-cover bg-center flex flex-col justify-end p-4 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200"
          >

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10">
              <h3 className="text-white font-bold text-xl mb-2">
                {item.heading}
              </h3>
              <p className="text-white text-sm md:text-base">
                {item.text}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}