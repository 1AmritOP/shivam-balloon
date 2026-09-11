import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Birthday Decoration",
    description:
      "Beautiful balloon setups to make birthday celebrations more colorful and memorable.",
    image: "/images/services/birthday.jpg",
  },
  {
    title: "Anniversary Decoration",
    description:
      "Elegant and romantic balloon decorations for your special anniversary moments.",
    image: "/images/services/anniversary.jpg",
  },
  {
    title: "Baby Shower Decoration",
    description:
      "Cute and creative balloon decorations designed specially for baby showers.",
    image: "/images/services/baby-shower.jpg",
  },
  {
    title: "Wedding Decoration",
    description:
      "Stylish balloon decorations to add a beautiful touch to weddings and engagements.",
    image: "/images/services/wedding.jpg",
  },
  {
    title: "Theme Decoration",
    description:
      "Creative theme-based decorations customized according to your event and preferences.",
    image: "/images/services/theme.jpg",
  },
  {
    title: "Party Decoration",
    description:
      "Colorful balloon arrangements for parties, celebrations and other special occasions.",
    image: "/images/services/party.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-orange-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Decoration For Every
            <span className="block text-orange-500">
              Special Occasion
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            From birthdays to weddings, Shivam Balloon Decoration creates
            beautiful and creative balloon decorations for all your special
            moments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Shivam Balloon Decoration`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href="/inquiry"
                  className="mt-5 inline-flex items-center text-sm font-bold text-orange-500 transition hover:text-orange-600"
                >
                  Enquire Now
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block rounded-md bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}