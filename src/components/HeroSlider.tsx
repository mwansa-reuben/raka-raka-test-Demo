import { useEffect, useState } from "react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";

const slides = [team1, team2, team3, team4, team5];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden bg-muted">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`RAKARAKA team moment ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-[center_30%] transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-accent"
                : "w-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
