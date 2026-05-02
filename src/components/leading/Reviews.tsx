export default function Reviews() {
  const reviews = [
    {
      text: "My thumbnails went from random to viral-looking in seconds. I finally understand what makes people click.",
      name: "Alex",
      role: "Travel Creator",
    },
    {
      text: "I used to get 200–300 views. After using this system, one video hit 50K views.",
      name: "Sarah",
      role: "Food Vlogger",
    },
    {
      text: "It completely changed how I design thumbnails. Now I think in emotions, not just design.",
      name: "Mike",
      role: "Tech YouTuber",
    },
  ];

  return (
    <section className="py-20 px-4 text-center text-white">

      {/* TITLE */}
      <h2
        style={{
          fontSize: "clamp(22px, 2.5vw, 32px)",
          lineHeight: 1.25,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontFamily: "Sora, sans-serif",
        }}
        className="mb-4"
      >
        What Creators Say
      </h2>

      {/* SUBTITLE */}
      <p
        style={{
          fontSize: "clamp(14px, 1.5vw, 18px)",
          lineHeight: 1.6,
          fontWeight: 400,
          fontFamily: "Inter, sans-serif",
        }}
        className="text-[#A6AAB3] mb-10"
      >
        Used by YouTubers to boost clicks and views
      </p>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:scale-[1.02] transition text-left"
          >

            {/* TEXT */}
            <p
              style={{
                fontSize: "clamp(13px, 1.2vw, 16px)",
                lineHeight: 1.5,
                fontWeight: 400,
                fontFamily: "Inter, sans-serif",
              }}
              className="text-[#D1D5DB]"
            >
              “{r.text}”
            </p>

            {/* AUTHOR */}
            <h4
              style={{
                fontSize: "clamp(13px, 1vw, 15px)",
                fontWeight: 600,
                fontFamily: "Sora, sans-serif",
              }}
              className="mt-4 text-white"
            >
              — {r.name}, {r.role}
            </h4>

          </div>
        ))}

      </div>
    </section>
  );
}