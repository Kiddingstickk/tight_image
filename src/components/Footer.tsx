import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-cream-white border-t border-leather-brown/30">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Tight Image.</h3>
            <p className="text-tan leading-relaxed mb-6">
              A premium grooming experience. Established 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/tightimagebarbershop/?utm_source=ig_web_button_share_sheet"
                className="w-10 h-10 bg-leather-brown flex items-center justify-center hover:bg-leather-brown-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-cream-white" />
              </a>
              <a
                href="https://www.facebook.com/p/Tight-Image-Barber-Shop-100063556045426/"
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
                <span>Monday: 3:30PM - 7PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-tan" />
                <span>Tue - Fri: 10AM - 7PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-tan" />
                <span>Saturday: 9:30AM - 6PM</span>
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
                <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-tan transition-colors">
                  <Phone className="w-4 h-4 text-tan" />
                  <span>+1 410-8377-776</span>
                </a>
              </li>
              <li>
                <a href="mailto:*" className="flex items-center gap-3 hover:text-tan transition-colors">
                  <Mail className="w-4 h-4 text-tan" />
                  <span>info@TightImage.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-tan mt-1" />
                <span>
                427 N Eutaw St # B<br/> Baltimore, MD 21201 <br/>United States
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12350.882976537994!2d-76.64017221284176!3d39.2945832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c804a3cc563b5b%3A0x31bf3fe76dce0ef1!2sTight%20Image!5e0!3m2!1sen!2sin!4v1767536717620!5m2!1sen!2sin" 
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
            © 2024 Tight Image .  All rights reserved.
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
