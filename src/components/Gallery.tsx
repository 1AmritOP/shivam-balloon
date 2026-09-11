import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Birthday balloon decoration by Shivam Balloon Decoration",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Party balloon decoration by Shivam Balloon Decoration",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Baby shower decoration by Shivam Balloon Decoration",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Anniversary balloon decoration by Shivam Balloon Decoration",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Wedding balloon decoration by Shivam Balloon Decoration",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "Theme balloon decoration by Shivam Balloon Decoration",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Our Gallery
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Recent
            <span className="block text-orange-500">
              Decoration Work
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Take a look at some of the beautiful celebrations decorated by
            Shivam Balloon Decoration.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1000}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-block rounded-md bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            VIEW FULL GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
}