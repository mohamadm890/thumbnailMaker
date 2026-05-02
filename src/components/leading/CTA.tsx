export default function CTASection() {
  return (
    <section className="py-24 px-4 text-center text-white">

      {/* TITLE */}
      <h2
        style={{
          fontSize: "clamp(26px, 3vw, 40px)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          fontWeight: 700,
          fontFamily: "Sora, sans-serif",
        }}
      >
        Ready to Get More Clicks?
      </h2>

      {/* SUBTITLE */}
      <p
        style={{
          fontSize: "clamp(14px, 1.5vw, 18px)",
          lineHeight: 1.6,
          fontWeight: 400,
          fontFamily: "Inter, sans-serif",
        }}
        className="text-[#A6AAB3] mt-4 max-w-xl mx-auto"
      >
        Turn any video idea into a high-CTR thumbnail in seconds.  
        No design skills needed.
      </p>

      {/* CTA BUTTON */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

        <button
          style={{
            fontSize: "clamp(12px, 1vw, 14px)",
            fontWeight: 600,
            letterSpacing: "0.03em",
          }}
          className="px-6 py-3 bg-white text-black rounded-xl hover:scale-[1.02] transition"
        >
          Try Free Generator
        </button>

      </div>

      {/* TRUST TEXT */}
      <p
        style={{
          fontSize: "clamp(12px, 0.9vw, 13px)",
          lineHeight: 1.5,
          fontWeight: 400,
        }}
        className="text-[#6B7280] mt-6"
      >
        No credit card required • Generate in seconds
      </p>

    </section>
  );
}