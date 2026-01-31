import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-cream-white border-t border-leather-brown/30">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">BarberShop @241 PeachTree</h3>
            <p className="text-tan leading-relaxed mb-6">
              A premium grooming experience for the modern man. Established 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/barbershop241peachtree/"
                className="w-10 h-10 bg-leather-brown flex items-center justify-center hover:bg-leather-brown-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-cream-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-leather-brown flex items-center justify-center hover:bg-leather-brown-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-cream-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Barbers", "Gallery", "Pricing"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary/70 hover:text-tan transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider mb-6">Hours</h4>
            <ul className="space-y-3 text-primary/70">
            <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-tan" />
                <span>Monday: 9:30AM - 5PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-tan" />
                <span>Tue - Thu: 9:30AM - 6PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-tan" />
                <span>Fri - Sat: 9:30AM - 7PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-tan" />
                <span>Sunday: Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-primary/70">
              <li>
                <a href="tel:+13106941853" className="flex items-center gap-3 hover:text-tan transition-colors">
                  <Phone className="w-4 h-4 text-tan" />
                  <span>+13106941853</span>
                </a>
              </li>
              <li>
                <a href="mailto:*" className="flex items-center gap-3 hover:text-tan transition-colors">
                  <Mail className="w-4 h-4 text-tan" />
                  <span>info@barbershop.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-tan mt-1" />
                <span>
                241 Peachtree St NE,<br />
                Atlanta, GA 30303<br /> United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 h-64 border border-leather-brown/30 overflow-hidden rounded-lg">
          <a
            href="https://maps.app.goo.gl/GRoKyNL34aJVHFVE9"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3810.469393215116!2d-84.38951089918878!3d33.7606642570215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5055c5a8d0ffb%3A0x3f1c9ec176f160ef!2sBarbershop%40241Peachtree!5e1!3m2!1sen!2sin!4v1769865882762!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </div>



        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-leather-brown/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary/60 text-sm">
            © 2026 BarberShop @241 PeachTree.  All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary/60">
            <a href="#" className="hover:text-tan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-tan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
