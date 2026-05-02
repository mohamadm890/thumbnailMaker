"use client";
import Button from "@/components/ui/button";
import React from "react";
import { Download } from "lucide-react";
import { useRouter } from "next/navigation";

export const Preview: React.FC<{ image?: string | null; loading?: boolean }> = ({ image, loading }) => {
  const router = useRouter();

  // ✅ Download function (robust)
  async function handleDownload() {
    if (!image) return;

    try {
      const res = await fetch(image);
      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "thumbnail.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    }
  }

  // ✅ Open preview only on mobile
  function handleOpenPreview() {
    if (!image) return;

    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      router.push(`/generate/preview?image=${encodeURIComponent(image)}`);
    }
  }

  return (
    <div>
      {/* IMAGE CONTAINER */}
      <div className="relative group w-full aspect-[518/299] bg-[#202226] rounded-[10px] overflow-hidden flex items-center justify-center">
        
        {/* 🔄 LOADING */}
        {!image && (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700" />
            <div className="relative z-10 text-center">
              <p className="text-white text-sm font-medium">
                Generating your thumbnail...
              </p>
              <p className="text-gray-300 text-xs mt-1">
                Optimizing for maximum clicks
              </p>
            </div>
          </div>
        )}

        {/* 🟢 IMAGE */}
        {!loading && image && (
          <>
            <div
              className="w-full h-full cursor-pointer"
              onClick={handleOpenPreview}
            >
              <img
                src={image}
                alt="thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ✅ HOVER OVERLAY (DESKTOP ONLY) */}
            <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // 🚀 prevent preview
                  handleDownload();
                }}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-4 rounded-full transition transform hover:scale-110"
              >
                <Download size={32} className="text-white" />
              </button>
            </div>
          </>
        )}

        {/* ⚪ EMPTY */}
        {!loading && !image && (
          <p className="text-gray-400 text-sm">
            Your preview will appear here
          </p>
        )}
      </div>

      {/* 📱 MOBILE DOWNLOAD BUTTON */}
      {!loading && image && (
        <div className="lg:hidden mt-6">
          <Button
            fullWidth
            onClick={handleDownload}
            className="flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download
          </Button>
        </div>
      )}
    </div>
  );
};