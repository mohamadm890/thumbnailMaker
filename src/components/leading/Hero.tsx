import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center bg-[#020617] py-20 overflow-hidden px-4">

      {/* glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl">

        {/* HERO TITLE */}
        <h1
          style={{
            fontSize: "clamp(30px, 4vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            fontWeight: 700,
            fontFamily: "Sora, sans-serif",
          }}
          className="text-[#F0F1F2] max-w-3xl mx-auto"
        >
          Stop wasting hours on thumbnails that{" "}
          <span className="text-blue-400">get ignored.</span>
        </h1>

        {/* SUBTITLE */}
        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 18px)",
            lineHeight: 1.6,
            fontWeight: 400,
            fontFamily: "Inter, sans-serif",
          }}
          className="mt-4 text-[#A6AAB3] max-w-xl mx-auto"
        >
          Turn your video script into a high-CTR masterpiece in 30 seconds. No Photoshop skills required.
        </p>

        {/* CTA */}
        <Link href="/generate">
  <button
    style={{
      fontSize: "clamp(12px, 1vw, 14px)",
      fontWeight: 500,
      letterSpacing: "0.03em",
    }}
    className="
      mt-8 px-8 py-4
      bg-[#0068DF] text-white rounded-xl
      shadow-[0_0_20px_rgba(0,104,223,0.3)]
      
      transition-all duration-300 ease-out
      
      hover:bg-[#0058c0]
      hover:shadow-[0_10px_30px_rgba(0,104,223,0.5)]
      hover:-translate-y-1
      hover:scale-[1.02]
      
      active:scale-[0.98]
    "
  >
    Generate Thumbnail
  </button>
</Link>

        {/* VIDEO */}
        <div className="mt-16 relative max-w-4xl mx-auto group">
          <div className="absolute -inset-4 bg-blue-500/30 blur-[60px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            <video
              className="w-full h-full object-cover"
              src="/demo.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="absolute inset-0 rounded-2xl border-t border-white/20 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}