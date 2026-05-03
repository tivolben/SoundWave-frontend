const tracks = [
  { name: "Night Vibes", genre: "Hip-Hop", img: '/img/track-1.jpg' },
  { name: "Soft Dreams", genre: "Pop", img: '/img/track-2.jpg' },
  { name: "Neon City", genre: "Electronic", img: '/img/track-3.jpg' },
];

export default function Portfolio() {
  return (
    <div className="bg-[#060606] w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-6">
        Наши работы
      </h2>

      <p className="text-white text-lg md:text-2xl text-center mb-10">
        Послушайте проекты, над которыми мы работали
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="relative h-96 w-full max-w-sm mx-auto rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${track.img})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 h-full flex flex-col justify-end items-center text-center text-white p-6 gap-3">
              <h3 className="text-2xl font-bold">{track.name}</h3>
              <p className="text-lg">{track.genre}</p>
              <button className="bg-white text-black px-4 py-2 rounded-xl">
                Послушать
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}