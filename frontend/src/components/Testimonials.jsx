import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Great honest guys. I got a flat down the road and they helped me get it back to their shop. I needed 4 tires and ended up buying them from them. They went out of their way and the service was great. Give this small business a chance, you won't be disappointed.",
    name: "Matt C",
    company: "Google Review · Charlotte, NC",
    rating: 5,
    initials: "MC",
    avatarColor: "bg-slate-600",
  },
  {
    quote: "I am so thankful that they had a mobile mechanic to come out to me on the side of 485! I hit a massive pothole that took out both of my tires. If you're looking for a mobile mechanic and stranded on the side of the road, this is the one!",
    name: "April Santiz",
    company: "Google Review · Charlotte, NC",
    rating: 5,
    photo: "/april-santiz-pfp.png",
  },
  {
    quote: "Flawless job and an incredible price. I was grossly overquoted by many businesses and didn't set an appointment but Josh and his team still took me in, did a killer job, and explained how to prevent the issues I was having with my rotors going forward.",
    name: "Scratch Surface",
    company: "Google Review · Charlotte, NC",
    rating: 5,
    photo: "/scratch-surface-pfp.png",
  },
  {
    quote: "This is by far one of the best tire places in Charlotte. The prices are reasonable and they are honest guys — even if you're a woman, don't be afraid, come on down. I've been coming here for years and will never go anywhere else.",
    name: "Berda McCutchen",
    company: "Google Review · Charlotte, NC",
    rating: 5,
    photo: "/berda-mc-pfp.png",
  },
  {
    quote: "I can trust them as a single mom — it is important not to be ripped off. They are sweet and kind and always get me in and out. Thank you for always being amazing.",
    name: "Lisa Wauchope",
    company: "Google Review · Charlotte, NC",
    rating: 5,
    initials: "LW",
    avatarColor: "bg-rose-500",
  },
  {
    quote: "Just outstanding people. I stopped in an emergency situation and they did everything they could to help me. It is nice to know there are businesses that still provide outstanding service.",
    name: "Matthew Knizner",
    company: "Google Review · Charlotte, NC",
    rating: 5,
    initials: "MK",
    avatarColor: "bg-blue-600",
  },
  {
    quote: "Jesus provided excellent and honest service. Joshua the owner cares about you as a customer. Great service, great quality, great communication, great prices.",
    name: "Yazmin DeHaven",
    company: "Google Review · Charlotte, NC",
    rating: 5,
    initials: "YD",
    avatarColor: "bg-violet-600",
  },
  {
    quote: "Josh had the tires I needed when no other shop did — everyone else said 1-2 business days. He had them ready same day. Best tire shop in CLT, he personally assisted me the whole time.",
    name: "Luis Pineda",
    company: "Google Review · Charlotte, NC",
    rating: 5,
    initials: "LP",
    avatarColor: "bg-emerald-600",
  },
  {
    quote: "We discovered we had a flat at 6:45 PM heading out of town. Most every tire place was closed but Josh offered to stay open until we could get there. A quick patch and we were on our way in no time.",
    name: "Tim Knapp",
    company: "Google Review · Charlotte, NC",
    rating: 5,
    photo: "/tim-knapp-pfp.png",
  },
  {
    quote: "One of the best companies I've dealt with. They offer outstanding service and unbeatable prices. Joshua is a real professional. I highly recommend JC's Tire and Brake.",
    name: "Leonid Beregovski",
    company: "Google Review · Charlotte, NC",
    rating: 5,
    photo: "/leonid-beregovski-pfp.png",
  },
];

const total = testimonials.length;
const slides = [...testimonials, testimonials[0]];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ item }) {
  if (item.photo) {
    return <img src={item.photo} alt={item.name} className="w-10 h-10 rounded-full object-cover shrink-0" />;
  }
  return (
    <div className={`w-10 h-10 rounded-full ${item.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
      {item.initials}
    </div>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => i + 1), 5000);
  };

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

  useEffect(() => {
    if (index === total) {
      const t = setTimeout(() => { setAnimate(false); setIndex(0); }, 700);
      return () => clearTimeout(t);
    }
  }, [index]);

  const goTo = (i) => { setAnimate(true); setIndex(i); startTimer(); };
  const prev = () => {
    if (index === 0) {
      setAnimate(false);
      setIndex(total - 1);
      requestAnimationFrame(() => requestAnimationFrame(() => { setAnimate(true); setIndex(total - 2); }));
    } else { goTo(index - 1); }
  };
  const next = () => goTo(index + 1);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-black mb-3">What Charlotte Says</h2>
          <div className="h-1 w-16 bg-[var(--jc-red-600)] rounded-full mx-auto mb-4" />
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <p className="text-gray-500 text-sm">4.7 stars · 68 Google reviews</p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`} style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((item, i) => (
              <div key={i} className="w-full shrink-0 px-2">
                <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl px-10 py-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                  <StarRating rating={item.rating} />
                  <p className="text-lg text-gray-800 leading-relaxed mb-8">"{item.quote}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar item={item} />
                    <div>
                      <div className="font-bold text-black text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prev} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-[var(--jc-red-600)] hover:text-white hover:border-[var(--jc-red-600)] transition text-xl">‹</button>
          <button onClick={next} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-[var(--jc-red-600)] hover:text-white hover:border-[var(--jc-red-600)] transition text-xl">›</button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`h-2 rounded-full transition-all duration-300 ${i === index % total ? "bg-[var(--jc-red-600)] w-6" : "bg-gray-300 w-2"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;