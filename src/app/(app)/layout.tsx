import HeaderServer from "@/components/layout/Header/HeaderServer"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Public header */}
      <HeaderServer />

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Optional footer (if you have one) */}
      {/* <Footer /> */}
    </div>
  )
}