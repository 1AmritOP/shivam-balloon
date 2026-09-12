import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/images/gallery/birthday-1.jpg",
    title: "Birthday Decoration",
    category: "Birthday",
  },
  {
    src: "/images/gallery/birthday-2.jpg",
    title: "Birthday Balloon Setup",
    category: "Birthday",
  },
  {
    src: "/images/gallery/anniversary-1.jpg",
    title: "Anniversary Decoration",
    category: "Anniversary",
  },
  {
    src: "/images/gallery/anniversary-2.jpg",
    title: "Romantic Balloon Decoration",
    category: "Anniversary",
  },
  {
    src: "/images/gallery/baby-shower-1.jpg",
    title: "Baby Shower Decoration",
    category: "Baby Shower",
  },
  {
    src: "/images/gallery/baby-shower-2.jpg",
    title: "Baby Shower Balloon Setup",
    category: "Baby Shower",
  },
  {
    src: "/images/gallery/wedding-1.jpg",
    title: "Wedding Decoration",
    category: "Wedding",
  },
  {
    src: "/images/gallery/wedding-2.jpg",
    title: "Wedding Balloon Decoration",
    category: "Wedding",
  },
  {
    src: "/images/gallery/theme-1.jpg",
    title: "Theme Decoration",
    category: "Theme",
  },
  {
    src: "/images/gallery/theme-2.jpg",
    title: "Creative Theme Setup",
    category: "Theme",
  },
  {
    src: "/images/gallery/party-1.jpg",
    title: "Party Decoration",
    category: "Party",
  },
  {
    src: "/images/gallery/party-2.jpg",
    title: "Party Balloon Setup",
    category: "Party",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-white">

      {/* Page Header */}
      <section className="bg-gray-950 px-5 py-16 text-center text-white sm:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
          Our Gallery
        </p>

        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          Our
          <span className="text-orange-500"> Decoration Work</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
          Take a look at some of our balloon decoration work and
          get inspiration for your next celebration.
        </p>
      </section>

      {/* Gallery */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Intro */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Our Work
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Moments We&apos;ve
              <span className="block text-orange-500">
                Helped Decorate
              </span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Explore our collection of balloon decoration setups for
              different celebrations and occasions.
            </p>
          </div>

          {/* Filter Buttons */}
          {/* <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "All",
              "Birthday",
              "Anniversary",
              "Baby Shower",
              "Wedding",
              "Theme",
              "Party",
            ].map((category, index) => (
              <button
                key={category}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div> */}

          {/* Image Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-2xl bg-gray-100"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={`${image.title} - Shivam Balloon Decoration`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/50" />

                  {/* Image Info */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                      {image.category}
                    </p>

                    <h3 className="mt-1 text-base font-bold text-white sm:text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-50 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Like What You See?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Let&apos;s Decorate Your
            <span className="block text-orange-500">
              Special Occasion
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Have a decoration idea in mind? Share your requirements
            with us and let&apos;s create something beautiful for your
            event.
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