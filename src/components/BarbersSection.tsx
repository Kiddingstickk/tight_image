import barber1 from "@/assets/afro.png";
import barber2 from "@/assets/afroo.png";
import barber3 from "@/assets/barber-3.jpg";
import { Instagram } from "lucide-react";

const barbers = [
  {
    name: "James Mitchell",
    role: "Master Barber & Owner",
    experience: "15+ years",
    specialty: "Classic cuts & hot towel shaves",
    image: barber1,
    instagram: "@jamestheblade",
  },
  {
    name: "Marcus Cole",
    role: "Senior Barber",
    experience: "12+ years",
    specialty: "Fades & beard sculpting",
    image: barber2,
    instagram: "@marcuscutsit",
  },
  {
    name: "Tyler Brooks",
    role: "Style Specialist",
    experience: "8+ years",
    specialty: "Modern styles & designs",
    image: barber3,
    instagram: "@tylerbrooks_barber",
  },
];

const BarbersSection = () => {
  return (
    <section id="barbers" className="section-padding bg-warm-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 razor-bg" />
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Alternating Layout for Barbers */}
        {barbers.map((barber, index) => (
          <div
            key={barber.name}
            className={`flex flex-col lg:flex-row items-center gap-12 mb-20 last:mb-0 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative overflow-hidden border-4 border-leather-brown group">
                <img
                  src={barber.image}
                  alt={`${barber.name} - ${barber.role}`}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-leather-brown/0 group-hover:bg-leather-brown/20 transition-all duration-300" />
              </div>
            </div>

            {/* Info */}
            <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:text-right" : "lg:text-left"} text-center`}>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{barber.name}</h3>
              <p className="text-leather-brown font-semibold uppercase text-sm tracking-wider mb-4">
                {barber.role}
              </p>
              <p className="text-muted-foreground mb-2">{barber.experience} experience</p>
              <p className="text-muted-foreground mb-6">{barber.specialty}</p>
              
              {/* Instagram */}
              <a
                href="#"
                className={`inline-flex items-center gap-2 text-foreground hover:text-leather-brown transition-colors ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <Instagram className="w-5 h-5" />
                <span>{barber.instagram}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BarbersSection;
