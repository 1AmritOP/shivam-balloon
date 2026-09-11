import Image from "next/image";
import Link from "next/link";
import {
  Cake,
  Heart,
  PartyPopper,
  Sparkles,
} from "lucide-react";

const specialities = [
  {
    icon: Cake,
    title: "Birthday Decorations",
    description:
      "Creative balloon decorations for birthdays of all ages, customized according to your theme and preferences.",
  },
  {
    icon: Heart,
    title: "Wedding & Anniversary",
    description:
      "Beautiful balloon setups to make weddings, anniversaries and romantic celebrations more memorable.",
  },
  {
    icon: PartyPopper,
    title: "Party Decorations",
    description:
      "Colorful and attractive decorations for parties, celebrations and special occasions.",
  },
  {
    icon: Sparkles,
    title: "Theme Decorations",
    description:
      "Theme-based balloon decorations designed to match the style and atmosphere of your event.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Page Header */}
      <section className="bg-gray-950 px-5 py-16 text-center text-white sm:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
          About Us
        </p>

        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          About
          <span className="text-orange-500">
            {" "}Shivam Balloon Decoration
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Creating beautiful balloon decorations for your special
          moments and celebrations.
        </p>
      </section>

      {/* About Content */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpg"
                alt="Shivam Balloon Decoration"
                width={800}
                height={600}
                className="h-full min-h-[350px] w-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                We Make Your
                <span className="block text-orange-500">
                  Celebrations Special
                </span>
              </h2>

              <p className="mt-6 leading-7 text-gray-600">
                Shivam Balloon Decoration provides balloon decoration
                services for birthdays, weddings, anniversaries,
                parties and other special occasions.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                We believe that the right decoration can completely
                transform a space and make a celebration more
                memorable. Our focus is on creating attractive
                balloon setups according to the occasion, theme and
                requirements of our customers.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                From simple and elegant decorations to colorful and
                creative balloon arrangements, we aim to make every
                event look beautiful and festive.
              </p>

              <Link
                href="/inquiry"
                className="mt-7 inline-flex rounded-md bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                PLAN YOUR EVENT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-orange-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Decoration For Every
              <span className="block text-orange-500">
                Special Occasion
              </span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We offer different types of balloon decoration services
              to make your celebrations more colorful and memorable.
            </p>
          </div>

          {/* Specialities */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specialities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 px-5 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready To Decorate Your
            <span className="text-orange-500">
              {" "}Special Event?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            Tell us about your event and decoration requirements.
            Let&apos;s create something beautiful together.
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