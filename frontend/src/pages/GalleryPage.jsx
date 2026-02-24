import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const images = [
  { src: "/gallery-photo-1.webp", title: "JC's Tire & Brakes" },
  { src: "/gallery-photo-2.webp", title: "Front Desk & Showroom" },
  { src: "/gallery-photo-3.webp", title: "Tire & Inspection Equipment" },
  { src: "/gallery-photo-4.webp", title: "The Service Bay" },
  { src: "/gallery-photo-5.webp", title: "Waiting Area" },
  { src: "/gallery-photo-6.webp", title: "Shop Floor" },
  { src: "/gallery-photo-7.webp", title: "Check-In Desk" },
  { src: "/gallery-photo-8.webp", title: "The Building" },
  { src: "/gallery-photo-9.webp", title: "On the Job" },
  { src: "/jc-tires-building.jpg", title: "JC's — Brookshire Blvd" },
];

function GalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const scrollToForm = () => {
    window.location.href = "/#quote";
  };

  const handlePrevious = () =>
    setSelectedIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const handleNext = () =>
    setSelectedIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const cardClass = () =>
    `
    relative overflow-hidden rounded-2xl group
    bg-[#161616]
    ring-1 ring-white/5
    shadow-[0_30px_60px_rgba(0,0,0,0.7)]
    hover:ring-[var(--jc-red-500)]
    hover:shadow-[0_35px_80px_rgba(0,0,0,0.85)]
    transition-all duration-300
  `;

  return (
    <div className="min-h-screen bg-[#111]">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToForm={scrollToForm}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-24 mt-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(237,4,2,0.08),transparent_60%)]" />
        <div className="text-center mb-12 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[var(--jc-white)]">
            Our Work
          </h1>
          <p className="text-[rgba(255,255,255,0.85)] text-lg max-w-2xl mx-auto">
            Click any photo to view full size
          </p>
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-6 sm:hidden">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`${cardClass()} h-[320px]`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="font-bold text-white text-lg">{img.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`${cardClass()} h-[340px]`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-bold text-white text-xl">{img.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`${cardClass()} h-[360px]`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-bold text-white text-xl">{img.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Footer scrollToForm={scrollToForm} />

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-6xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-3xl font-bold"
            >
              ✕
            </button>
            <div className="relative">
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl font-bold z-10"
              >
                ‹
              </button>
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="max-h-[80vh] max-w-full w-auto h-auto mx-auto rounded-2xl shadow-2xl"
              />
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl font-bold z-10"
              >
                ›
              </button>
            </div>
            <p className="text-white font-bold text-xl text-center bg-black/60 backdrop-blur-sm px-8 py-3 rounded-xl">
              {images[selectedIndex].title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
