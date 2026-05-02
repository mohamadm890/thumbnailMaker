import MarketingHeader from '@/components/layout/Header/MarketingHeader'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Public header */}
      <MarketingHeader />

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Optional footer (if you have one) */}
      {/* <Footer /> */}
    </div>
  )
}