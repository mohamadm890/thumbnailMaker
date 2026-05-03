import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 text-white border-t border-zinc-800">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* BRAND */}
        <div className="max-w-xs">

          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="VizThumb" className="h-6 w-auto" />
          </Link>

          <p
            style={{
              fontSize: "clamp(13px, 1.2vw, 16px)",
              lineHeight: 1.5,
              fontWeight: 400,
              fontFamily: "Inter, sans-serif",
            }}
            className="text-[#A6AAB3] mt-3"
          >
            AI-powered thumbnail generator that turns ideas into high-click visuals in seconds.
          </p>
        </div>

        {/* LINKS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">

          {/* Product */}
          <div className="flex flex-col gap-2">
            <h4
              style={{
                fontSize: "clamp(14px, 1vw, 16px)",
                fontWeight: 600,
                fontFamily: "Sora, sans-serif",
              }}
              className="text-white mb-2"
            >
              Product
            </h4>

            <Link className="text-[#A6AAB3] hover:text-white transition" href="/generate">
              Generator
            </Link>
            <Link className="text-[#A6AAB3] hover:text-white transition" href="/#features">
              Features
            </Link>
            <Link className="text-[#A6AAB3] hover:text-white transition" href="/pricing">
              Pricing
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <h4
              style={{
                fontSize: "clamp(14px, 1vw, 16px)",
                fontWeight: 600,
                fontFamily: "Sora, sans-serif",
              }}
              className="text-white mb-2"
            >
              Company
            </h4>

            <Link className="text-[#A6AAB3] hover:text-white transition" href="/about">
              About
            </Link>
            <Link className="text-[#A6AAB3] hover:text-white transition" href="/contact">
              Contact
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h4
              style={{
                fontSize: "clamp(14px, 1vw, 16px)",
                fontWeight: 600,
                fontFamily: "Sora, sans-serif",
              }}
              className="text-white mb-2"
            >
              Legal
            </h4>

            <Link className="text-[#A6AAB3] hover:text-white transition" href="/privacy">
              Privacy
            </Link>
            <Link className="text-[#A6AAB3] hover:text-white transition" href="/terms">
              Terms
            </Link>
            <Link className="text-[#A6AAB3] hover:text-white transition" href="/refund">
            Refund
           </Link>
          </div>

        </div>
      </div>

      {/* BOTTOM LINE */}
      <div
        style={{
          fontSize: "clamp(11px, 0.8vw, 12px)",
          fontWeight: 400,
        }}
        className="mt-10 text-center text-[#6B7280]"
      >
        © {new Date().getFullYear()} VizThumb. All rights reserved.
      </div>

    </footer>
  );
}
