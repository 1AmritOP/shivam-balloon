import Image from "next/image";
import Link from "next/link";
import {
  Cake,
  Heart,
  Baby,
  PartyPopper,
  Sparkles,
  Building2,
} from "lucide-react";

const services = [
  {
    title: "Birthday Decoration",
    description:
      "Make birthdays more colorful and memorable with creative balloon decorations designed according to your celebration and theme.",
    image: "/images/services/birthday.jpg",
    icon: Cake,
  },
  {
    title: "Anniversary Decoration",
    description:
      "Celebrate your special day with beautiful and elegant balloon arrangements created for romantic anniversary celebrations.",
    image: "/images/services/anniversary.jpg",
    icon: Heart,
  },
  {
    title: "Baby Shower Decoration",
    description:
      "Create a beautiful and joyful atmosphere for your baby shower with cute and creative balloon decoration setups.",
    image: "/images/services/baby-shower.jpg",
    icon: Baby,
  },
  {
    title: "Wedding Decoration",
    description:
      "Add a stylish and festive touch to your wedding or engagement celebration with attractive balloon decorations.",
    image: "/images/services/wedding.jpg",
    icon: Heart,
  },
  {
    title: "Theme Decoration",
    description:
      "Choose a theme and let us create a decoration setup that matches the colors, style and overall feel of your event.",
    image: "/images/services/theme.jpg",
    icon: Sparkles,
  },
  {
    title: "Party Decoration",
    description:
      "From small gatherings to special parties, we create colorful balloon arrangements that bring your celebration to life.",
    image: "/images/services/party.jpg",
    icon: PartyPopper,
  },
  {
    title: "Welcome Home Decoration",
    description:
      "Welcome your loved ones with a beautiful balloon decoration setup that creates a warm and memorable first impression.",
    image: "/images/services/welcome-home.jpg",
    icon: Sparkles,
  },
  {
    title: "Corporate & Event Decoration",
    description:
      "Professional balloon decoration solutions for corporate events, celebrations and other special occasions.",
    image: "/images/services/corporate.jpg",
    icon: Building2,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* Page Header */}
      <section className="bg-gray-950 px-5 py-16 text-center text-white sm:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
          Our Services
        </p>

        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          Balloon Decoration
          <span className="block text-orange-500">
            For Every Occasion
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
          From birthdays and anniversaries to weddings and special
          celebrations, Shivam Balloon Decoration creates beautiful
          setups for every occasion.
        </p>
      </section>

      {/* Services */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Intro */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Find The Perfect
              <span className="block text-orange-500">
                Decoration For Your Event
              </span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Explore our decoration services and choose the setup
              that fits your celebration.
            </p>
          </div>

          {/* Service Grid */}
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Shivam Balloon Decoration`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500 shadow-lg">
                      <Icon size={22} />
                    </div>
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-50 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Have Something Special In Mind?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Let&apos;s Create Your
            <span className="block text-orange-500">
              Perfect Decoration
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Tell us about your event, preferred theme and decoration
            requirements. We&apos;ll discuss the possibilities with you.
          </p>

          <Link
            href="/inquiry"
            className="mt-7 inline-flex rounded-md bg-orange-500 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            SEND AN INQUIRY
          </Link>

        </div>
      </section>

    </main>
  );
}