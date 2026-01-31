import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scissors, Sparkles, Flame, PenTool, Package } from "lucide-react";
import servicesBg from "@/assets/guiii-modified1.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Scissors, title: "Haircuts", description: "Precision cuts tailored to your style. From classic fades to modern textured looks." },
  { icon: PenTool, title: "Beard Trims", description: "Expert beard shaping and maintenance. Keep your facial hair looking sharp and refined." },
  { icon: Flame, title: "Hot Towel Shaves", description: "The ultimate traditional shave experience with hot towels and straight razor precision." },
  { icon: Sparkles, title: "Styling", description: "Professional styling with premium products. Perfect for events or everyday confidence." },
  { icon: Package, title: "Grooming Packages", description: "Complete grooming experiences combining our best services at exclusive prices." },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLDivElement>(".service-block");

      // One timeline for the whole section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",     // when section enters
          end: "bottom 25%",    // when section leaves
          scrub: true,
        }
      });

      // Phase 1: all blocks slide in together
      tl.fromTo(blocks,
        { x: (i: number) => (i % 2 === 0 ? "-100%" : "100%"), opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0 } // no stagger → all at once
      );

      // Phase 2: stay static
      tl.to(blocks, { x: 0, opacity: 1, duration: 1 });

      // Phase 3: slide out alternately
      tl.to(blocks,
        { x: (i: number) => (i % 2 === 0 ? "100%" : "-100%"), opacity: 0, duration: 1, ease: "power2.in", stagger: 0 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-red-700 mb-4">
            Our Services
          </h2>
          <p className="text-blue-900 text-lg">
            Premium grooming services crafted for the modern gentleman
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-block flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-red-700 flex items-center justify-center group hover:bg-blue-600 transition-colors">
                  <service.icon className="w-12 h-12 text-white" />
                </div>
              </div>

              <div
                className={`flex-1 text-center ${
                  index % 2 === 1 ? "md:text-right md:items-end" : "md:text-left md:items-start"
                } flex flex-col`}
              >
                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-black leading-relaxed max-w-md mx-auto md:mx-0">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;