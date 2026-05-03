const review = [
  { name: "Мария", estimation: "★★★★★", review: "Профессиональный подход и приятная атмосфера. Рекомендую!" },
  { name: "Алексей", estimation: "★★★★★", review: "Записывал трек — результат превзошёл ожидания. Очень крутой звук!" },
  { name: "Дмитрий", estimation: "★★★★★", review: "Сделали всё быстро и качественно. Буду работать ещё." },
];

export default function Reviews() {
  return (
    <div className="bg-[#060606] w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-10">
        Отзывы
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {review.map((item, index) => (
          <div
            key={index}
            className="p-4 md:p-6 bg-[#060606] border border-[#1E1E1E] rounded-xl"
          >

            <div className="flex items-center gap-3">
              <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-white">
                {item.name[0]}
              </div>

              <div className="text-white text-lg">
                {item.name}
              </div>
            </div>

            <div className="text-white my-3 text-yellow-400">
              <p>{item.estimation}</p>
            </div>

            <div className="text-white text-sm md:text-base">
              <p>{item.review}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}