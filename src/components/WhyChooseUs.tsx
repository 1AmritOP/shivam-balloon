const reasons = [
  {
    number: "01",
    title: "Creative Decoration",
    description:
      "We create attractive and creative balloon setups that match the theme and mood of your special occasion.",
  },
  {
    number: "02",
    title: "Personalized Setup",
    description:
      "Every event is different, so we customize the decoration according to your preferences and requirements.",
  },
  {
    number: "03",
    title: "Quality Materials",
    description:
      "We use quality balloons and decoration materials to create beautiful and long-lasting event setups.",
  },
  {
    number: "04",
    title: "On-Time Service",
    description:
      "We understand the importance of your event and aim to complete the decoration setup on time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Making Your Celebration
            <span className="block text-orange-400">
              Truly Special
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            At Shivam Balloon Decoration, we focus on creativity, quality
            and a smooth decoration experience for your special occasions.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group rounded-2xl border border-gray-800 bg-gray-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
            >
              <span className="text-4xl font-extrabold text-orange-500/40 transition group-hover:text-orange-500">
                {reason.number}
              </span>

              <h3 className="mt-6 text-xl font-bold">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}