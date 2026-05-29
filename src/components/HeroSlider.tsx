import { useEffect, useState } from "react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";

const slides = [
  { src: team1, position: "object-[center_50%]" },
  { src: team2, position: "object-[center_70%]" },
  { src: team3, position: "object-[center_50%]" },
  { src: team4, position: "object-[center_28%]" },
  { src: team5, position: "object-[center_02%]" },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden bg-muted">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={`RAKARAKA team moment ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover ${slide.position} transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-accent" : "w-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
