import gallery1 from "@/assets/Screenshot (271).png";
import gallery2 from "@/assets/Screenshot (270).png";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Precision fade haircut in progress" },
  { src: gallery2, alt: "Hot towel shave treatment" },
  { src: gallery3, alt: "Professional beard trimming" },
  { src: gallery4, alt: "Premium barbershop interior and products" },
  { src: gallery5, alt: "Finished pompadour hairstyle" },
  { src: gallery6, alt: "Barbershop lounge and waiting area" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-cream-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 scissors-bg" />
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header - Right aligned for alternating pattern */}
        <div className="mb-16 max-w-xl ml-auto text-right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into our craftsmanship and space
          </p>
        </div>

        {/* Gallery Grid - Asymmetric Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden cursor-pointer border-2 border-leather-brown/20 hover:border-leather-brown transition-colors ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-leather-brown/0 group-hover:bg-leather-brown/40 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-cream-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-cream-white text-2xl">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
