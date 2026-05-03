import Link from "next/link";

export default function MarketingHeader() {
  return (
    <header className="w-full   sticky top-0 z-50">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
      <img src="/logo.svg" alt="VizThumb" className="h-6 w-auto" />
    </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          
          <Link href="/generate" className="hover:text-black dark:hover:text-white">
          Ai thumbnail generator
          </Link>

          
          <Link href="/pricing" className="hover:text-black dark:hover:text-white">
            Pricing
          </Link>

          <Link href="/about" className="hover:text-black dark:hover:text-white">
            About
          </Link>

          

        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">

          <Link
            href="/generate"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Try Generator
          </Link>

        </div>

      </div>
    </header>
  );
}
