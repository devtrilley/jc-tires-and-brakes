import { useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";

const images = [
  {
    src: "/gallery-photo-1.webp",
    title: "JC's Tire & Brakes",
    desc: "Charlotte's trusted neighborhood shop",
  },
  {
    src: "/gallery-photo-2.webp",
    title: "Front Desk & Showroom",
    desc: "Tires in stock. Ready same day.",
  },
  {
    src: "/gallery-photo-3.webp",
    title: "Tire & Inspection Equipment",
    desc: "Official NC inspection station on site",
  },
  {
    src: "/gallery-photo-4.webp",
    title: "The Service Bay",
    desc: "Where your car gets taken care of",
  },
  {
    src: "/gallery-photo-5.webp",
    title: "Waiting Area",
    desc: "Clean, comfortable, and quick",
  },
  {
    src: "/gallery-photo-6.webp",
    title: "Shop Floor",
    desc: "Fully equipped bays for any job",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="work"
      className="relative py-16 sm:py-20 scroll-mt-12 bg-[var(--jc-red-700)]"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[var(--jc-black)]/30 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--jc-black)]/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-white drop-shadow-lg">
            Our Work
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Real jobs. Real results. See what we do at JC's every day.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:hidden pb-2 -mx-4 px-4">
          {images.slice(0, 4).map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(img.src)}
              className="snap-center shrink-0 w-[85%] relative rounded-2xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-[320px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <p className="font-bold text-white text-lg">{img.title}</p>
                <p className="text-sm text-white/90">{img.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Tablet 2x2 */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {images.slice(0, 4).map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(img.src)}
              className="relative overflow-hidden rounded-2xl group shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300 h-[340px]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <p className="font-semibold text-white text-xl tracking-wide drop-shadow-md">
                  {img.title}
                </p>
                <p className="text-sm text-white/90">{img.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Desktop 3x2 */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(img.src)}
              className="relative overflow-hidden rounded-2xl group shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300 h-[360px]"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--jc-red-600)]/0 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-left group-hover:-translate-y-1 transition-transform duration-300">
                <p className="font-semibold text-white text-xl tracking-wide drop-shadow-md">
                  {img.title}
                </p>
                <p className="text-sm text-white/90">{img.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/gallery">
            <CTAButton variant="white">View Full Gallery →</CTAButton>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-3xl font-bold transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Expanded"
              className="max-h-[85vh] max-w-full w-auto h-auto mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
