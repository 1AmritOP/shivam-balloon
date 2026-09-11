import Link from "next/link";
import {
  // Facebook,
  // Instagram,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Photo Gallery", href: "/gallery" },
  { name: "Inquiry", href: "/inquiry" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Welcome Home Baby Decoration",
  "Birthday Party Decor Home",
  "Birthday Party Decor Banquet Hall",
  "Anniversary Decor",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* About Us */}
          <div>
            <h3 className="text-2xl font-bold uppercase">
              About Us
            </h3>

            <div className="mt-7 h-1 w-12 bg-orange-500" />

            <p className="mt-6 text-[15px] leading-7 text-gray-300">
              Backed by our rich industry experience, we are engaged in
              offering Balloon Decoration service. We create beautiful
              decorations for birthdays, weddings, anniversaries and
              other special events.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                {/* <Facebook size={18} /> */}
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                {/* <Instagram size={18} /> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold uppercase">
              Quick Links
            </h3>

            <div className="mt-7 h-1 w-12 bg-orange-500" />

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[15px] text-gray-300 transition hover:text-orange-500"
                  >
                    <ChevronRight
                      size={16}
                      className="text-orange-500 transition-transform group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold uppercase">
              Our Services
            </h3>

            <div className="mt-7 h-1 w-12 bg-orange-500" />

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2 text-[15px] leading-6 text-gray-300"
                >
                  <span className="mt-1 text-orange-500">◆</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="text-2xl font-bold uppercase">
              Reach Us
            </h3>

            <div className="mt-7 h-1 w-12 bg-orange-500" />

            {/* Google Map */}
            <div className="mt-6 overflow-hidden rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.963861365437!2d77.38333877423808!3d28.570847886881435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefd3d8618695%3A0x1bc6ed49a8483374!2sUttam%20Balloon%20Decoration!5e0!3m2!1sen!2sin!4v1789117703362!5m2!1sen!2sin"
                width="100%"
                height="230"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {/* Contact */}
            <div className="mt-5 space-y-3">

              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-orange-500"
              >
                <Phone size={18} className="text-orange-500" />
                +91 00000 00000
              </a>

              <a
                href="mailto:info@shivamballoondecoration.com"
                className="flex items-center gap-3 text-sm text-gray-300 transition hover:text-orange-500"
              >
                <Mail size={18} className="shrink-0 text-orange-500" />
                info@shivamballoondecoration.com
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-orange-500"
                />
                <span>
                  Your Shop Address,
                  <br />
                  Your City, India
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-5 py-5 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-orange-500">
              Shivam Balloon Decoration
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}