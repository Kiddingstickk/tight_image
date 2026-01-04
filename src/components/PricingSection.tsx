import { Button } from "@/components/ui/button";

const pricingData = [
  {
    category: "Haircuts",
    services: [
      { name: "Classic Cut", price: "$35", description: "Traditional clipper and scissor cut" },
      { name: "Fade Cut", price: "$40", description: "Low, mid, or high fade" },
      { name: "Scissor Cut", price: "$45", description: "Full scissor precision cut" },
      { name: "Kids Cut", price: "$25", description: "Ages 12 and under" },
    ],
  },
  {
    category: "Beard Services",
    services: [
      { name: "Beard Trim", price: "$20", description: "Shape and line-up" },
      { name: "Beard Sculpt", price: "$30", description: "Full shaping and styling" },
      { name: "Hot Towel Shave", price: "$45", description: "Classic straight razor shave" },
      { name: "Beard Treatment", price: "$35", description: "Deep conditioning and care" },
    ],
  },
  {
    category: "Packages",
    services: [
      { name: "The Executive", price: "$65", description: "Haircut + Beard trim + Styling" },
      { name: "The Gentleman", price: "$85", description: "Haircut + Hot towel shave" },
      { name: "The Royal", price: "$120", description: "Full service grooming experience" },
      { name: "Monthly Club", price: "$150/mo", description: "2 cuts + unlimited trims" },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-warm-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 barber-tools-bg" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
            Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparent pricing for premium services
          </p>
        </div>

        {/* Pricing Tables - Alternating Layout */}
        <div className="space-y-12">
          {pricingData.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`flex flex-col lg:flex-row ${
                categoryIndex % 2 === 1 ? "lg:justify-end text-right" : "text-left"
              }`}
            >
              <div className="lg:w-2/3 bg-cream-white border-2 border-leather-brown/20 p-6 shadow-card">
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-tan uppercase tracking-wider">
                    {category.category}
                  </h3>
                </div>

                {/* Services List */}
                {category.services.map((service, serviceIndex) => (
                <div
                  key={service.name}
                  className={`py-4 ${
                    serviceIndex !== category.services.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div
                    className={`flex items-start mb-1 ${
                      categoryIndex % 2 === 1 ? "flex-row-reverse justify-between" : "justify-between"
                    }`}
                  >
                    <span className="text-primary font-semibold">{service.name}</span>
                    <span className="text-leather-brown font-bold text-lg">{service.price}</span>
                  </div>
                  <p
                    className={`text-muted-foreground text-sm ${
                      categoryIndex % 2 === 1 ? "text-right" : "text-left"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="cta" size="lg">
            Book Your Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;