import { BadgeAlert } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-20 px-4 text-center">

      {/* TITLE */}
      <h2
        style={{
          fontSize: "clamp(22px, 2.5vw, 32px)",
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          fontWeight: 600,
          fontFamily: "Sora, sans-serif",
        }}
        className="mb-10 text-white"
      >
        Why Most Thumbnails Don’t Get Clicks
      </h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-6 py-12 justify-center items-start">

        {/* CARD */}
        {[
          {
            title: "The “Ghost” Video Problem",
            text: "You spent 20 hours editing, but if the thumbnail fails, nobody ever sees your hard work.",
          },
          {
            title: "No Clear Focus Point",
            text: "Viewers don’t know where to look. When everything competes, nothing gets clicked.",
          },
          {
            title: "No Curiosity Trigger",
            text: "If the thumbnail doesn’t make people ask “what is happening here?”, they scroll away instantly.",
          },
        ].map((item, i) => (
          <div key={i} className="max-w-sm text-left">

            {/* HEADER */}
            <div className="flex items-center gap-2 mb-2">
              <BadgeAlert className="text-red-500 w-5 h-5" />

              <h3
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  fontWeight: 600,
                  fontFamily: "Sora, sans-serif",
                }}
                className="text-white"
              >
                {item.title}
              </h3>
            </div>

            {/* TEXT */}
            <p
              style={{
                fontSize: "clamp(13px, 1.2vw, 16px)",
                lineHeight: 1.5,
                fontWeight: 400,
                fontFamily: "Inter, sans-serif",
              }}
              className="text-[#A6AAB3]"
            >
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}