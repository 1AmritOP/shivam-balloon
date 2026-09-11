import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* Image */}
        <div className="relative">
          <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[420px]">
            <Image
              src="/images/hero-decoration.jpg"
              alt="Shivam Balloon Decoration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Small experience card */}
          <div className="absolute -bottom-5 right-4 rounded-xl bg-orange-500 px-5 py-4 text-white shadow-lg sm:right-8">
            <p className="text-2xl font-bold">Special</p>
            <p className="text-sm">Moments Made Beautiful</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            About Us
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            We Make Your
            <span className="block text-orange-500">
              Celebrations Special
            </span>
          </h2>

          <p className="mt-6 leading-7 text-gray-600">
            At Shivam Balloon Decoration, we believe every celebration
            deserves a beautiful setup. We create attractive and memorable
            balloon decorations for birthdays, anniversaries, weddings,
            baby showers and other special events.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            From simple and elegant decorations to creative theme-based
            setups, we focus on making every event look special and
            unforgettable.
          </p>

          {/* Highlights */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                ✓
              </span>
              <span className="font-semibold text-gray-800">
                Creative Designs
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                ✓
              </span>
              <span className="font-semibold text-gray-800">
                Quality Decoration
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                ✓
              </span>
              <span className="font-semibold text-gray-800">
                Professional Service
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                ✓
              </span>
              <span className="font-semibold text-gray-800">
                Memorable Events
              </span>
            </div>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-md bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}