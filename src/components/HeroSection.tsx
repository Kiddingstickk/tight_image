import { Button } from "@/components/ui/button";
import reddd from "@/assets/guiii-modified1.png";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

const HeroSection = () => {
  const words = ["BARBERSHOP", "@241 PEACHTREE"];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${reddd})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-leather-brown/60" />
      </div>

      {/* Scissors Background Pattern */}
      <div className="absolute inset-0 scissors-bg opacity-30" />

      {/* Content - Left aligned */}
      <div className="relative z-10 container mx-auto container-padding pt-20">
        <div className="max-w-2xl">
          {/* Animated Heading */}
          <div className="flex items-center gap-3 mb-6">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-black text-cream-white leading-tight"
            >
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 1, duration: 0.6 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: words.length * 0.8 }}
                className="text-tan block"
              >
                BEST in BIZ
              </motion.span>
            </motion.h1>

            {/* Scissors animation */}
            
          </div>

          <p
            className="text-lg md:text-xl text-cream-white/80 max-w-xl mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            A premium grooming experience for the modern man. Where traditional craftsmanship meets contemporary style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="cta" size="xl">
              Book Your Appointment
            </Button>
            <Button variant="hero" size="xl">
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-cream-white/20 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-black text-cream-white">5+</div>
              <div className="text-sm text-cream-white/70 uppercase tracking-wider mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-cream-white">1000+</div>
              <div className="text-sm text-cream-white/70 uppercase tracking-wider mt-1">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-cream-white">5.0★</div>
              <div className="text-sm text-cream-white/70 uppercase tracking-wider mt-1">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-white/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream-white/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;