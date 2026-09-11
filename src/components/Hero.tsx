import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-orange-50 ">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">

        {/* Content */}
        <div className="text-center lg:text-left">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Shivam Balloon Decoration 
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Make Your
            <span className="block text-orange-500">
              Special Moments
            </span>
            Unforgettable
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Beautiful balloon decorations for birthdays, anniversaries,
            weddings, baby showers and every special celebration.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/inquiry"
              className="rounded-md bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              BOOK YOUR EVENT
            </Link>

            <Link
              href="/gallery"
              className="rounded-md border-2 border-orange-500 px-7 py-3.5 text-sm font-bold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              VIEW OUR WORK
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-600 lg:justify-start">
            <span>✓ Creative Decorations</span>
            <span>✓ Professional Service</span>
            <span>✓ Special Events</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              // width={100}
              // height={320}
              src="/images/hero-decoration.jpg"
              alt="Shivam Balloon Decoration"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
            />
          </div>

          {/* Experience Card */}
          <div className="absolute -bottom-5 left-4 rounded-xl bg-white px-5 py-4 shadow-lg sm:left-8">
            <p className="text-2xl font-bold text-orange-500">100+</p>
            <p className="text-sm font-medium text-gray-600">
              Events Decorated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}