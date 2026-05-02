export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-20 text-center">

        <h1
          style={{
            fontSize: "clamp(28px, 3vw, 40px)",
            lineHeight: 1.15,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
          className="text-zinc-900 dark:text-white"
        >
          About VizThumb
        </h1>

        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 18px)",
            lineHeight: 1.6,
          }}
          className="mt-4 text-zinc-600 dark:text-zinc-400"
        >
          We help creators design thumbnails that get clicks — without design skills or wasted time.
        </p>

      </section>

      {/* STORY */}
      <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">

        {[
          "Most creators spend hours designing thumbnails… and still get low CTR.",
          "The real problem is not editing tools — it’s decision overload. What text? What face? What colors?",
          "VizThumb was built to remove that stress. You just input your idea, and we generate high-converting thumbnail concepts in seconds.",
        ].map((text, i) => (
          <p
            key={i}
            style={{
              fontSize: "clamp(13px, 1.2vw, 16px)",
              lineHeight: 1.7,
            }}
            className="text-zinc-700 dark:text-zinc-300"
          >
            {text}
          </p>
        ))}

      </section>

      {/* WHAT WE DO */}
      <section className="max-w-5xl mx-auto px-6 pb-16">

        <h2
          style={{
            fontSize: "clamp(18px, 2vw, 24px)",
            fontWeight: 700,
          }}
          className="text-center text-zinc-900 dark:text-white mb-6"
        >
          What we do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              title: "AI Thumbnail Ideas",
              desc: "Generate high CTR thumbnail concepts based on your video topic.",
            },
            {
              title: "Hook Optimization",
              desc: "We suggest powerful hooks that increase clicks instantly.",
            },
            {
              title: "Visual Direction",
              desc: "Colors, layout, and style suggestions based on viral patterns.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:scale-[1.02] transition"
            >
              <h3
                style={{
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  fontWeight: 600,
                }}
                className="text-zinc-900 dark:text-white"
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "clamp(13px, 1.1vw, 15px)",
                  lineHeight: 1.6,
                }}
                className="text-zinc-600 dark:text-zinc-400 mt-2"
              >
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* MISSION */}
      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">

        <h2
          style={{
            fontSize: "clamp(18px, 2vw, 24px)",
            fontWeight: 700,
          }}
          className="text-zinc-900 dark:text-white"
        >
          Our Mission
        </h2>

        <p
          style={{
            fontSize: "clamp(13px, 1.2vw, 16px)",
            lineHeight: 1.7,
          }}
          className="mt-4 text-zinc-600 dark:text-zinc-400"
        >
          Help every creator — from beginners to professionals — create thumbnails that actually get seen, clicked, and remembered.
        </p>

      </section>

    </main>
  );
}