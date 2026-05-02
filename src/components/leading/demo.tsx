export default function Demo() {
    return (
      <section className="w-full px-4 text-center bg-[#202226]">
        
        <div className="py-12">
        <h2 className="text-2xl sm:text-4xl font-sora max-w-2xl tracking-[-0.04em] mx-auto">
        Turn Your Idea Into a Viral Thumbnail in Second!
        </h2>
  
       
  
        {/* Video container */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          
          <video
            className="w-full h-full"
            src="/demo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          
        </div>
  </div>
      </section>
    );
  }