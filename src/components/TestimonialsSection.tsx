import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Regular Client",
    content: "Best barbershop in the city. James knows exactly what I want before I even say it. The attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Business Executive",
    content: "The Executive package is worth every penny. Walking into important meetings with this kind of confidence is priceless.",
    rating: 5,
  },
  {
    name: "Robert Williams",
    role: "Monthly Member",
    content: "I've been to a lot of barbershops, but Barbershop is different. The atmosphere, the skill, the service - all top tier.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-leather-brown relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 scissors-bg opacity-20" />
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header - Right aligned for alternating pattern */}
        <div className="mb-16 max-w-xl ml-auto text-right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-cream-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-cream-white/70 text-lg">
            Real experiences from real gentlemen
          </p>
        </div>

        {/* Testimonials - Alternating Layout */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-cream-white/10 border-2 border-cream-white/20 flex items-center justify-center">
                  <Quote className="w-10 h-10 text-cream-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : "md:text-left"} text-center`}>
                {/* Stars */}
                <div className={`flex gap-1 mb-4 ${index % 2 === 1 ? "md:justify-end" : "md:justify-start"} justify-center`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cream-white text-cream-white" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-cream-white text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div>
                  <div className="text-cream-white font-semibold">{testimonial.name}</div>
                  <div className="text-cream-white/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
