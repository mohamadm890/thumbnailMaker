export function BeforeAfter() {
    return (
      <section className="py-20 px-4 text-center">
  
        <h2 className="text-3xl font-sora mb-4">
          From 12 Views → To 1M+ Views
        </h2>
  
        <p className="text-gray-500 mb-10">
          Same video. Different thumbnail. Completely different results.
        </p>
  
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-10">
  
          {/* BEFORE */}
          <div className="w-[320px]">
            <h3 className="text-red-500 font-semibold mb-2">
              ❌ Before (Without AI Tool)
            </h3>
  
            <div className="h-[180px] border rounded-xl bg-gray-100 flex flex-col items-center justify-center">
              <p className="text-gray-400 text-sm">Low-quality thumbnail</p>
              <p className="text-gray-500 text-xs mt-2">No focus • No emotion</p>
            </div>
  
            <p className="text-sm text-gray-500 mt-3">
              📉 Result: 12 views
            </p>
          </div>
  
          {/* AFTER */}
          <div className="w-[320px]">
            <h3 className="text-green-600 font-semibold mb-2">
              ✅ After (With AI Tool)
            </h3>
  
            <div className="h-[180px] border rounded-xl bg-white shadow flex flex-col items-center justify-center">
              <p className="text-gray-700 text-sm font-medium">
                High CTR AI thumbnail
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Clear focus • Strong emotion • Curiosity gap
              </p>
            </div>
  
            <p className="text-sm text-gray-500 mt-3">
              📈 Result: 1,000,000+ views
            </p>
          </div>
  
        </div>
  
        <p className="mt-10 text-gray-600 text-sm max-w-xl mx-auto">
          Nothing changed in the video. Only the thumbnail structure changed the outcome.
        </p>
  
      </section>
    );
  }