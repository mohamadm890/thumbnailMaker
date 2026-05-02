"use client";

import { useSearchParams } from "next/navigation";
import { Download, Share2 } from "lucide-react";

export default function PreviewClient() {
  const params = useSearchParams();
  const image = params.get("image");

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: "My Thumbnail",
        text: "Check this out!",
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported");
    }
  }

  async function handleDownload(imageUrl: string | null) {
    if (!imageUrl) return;

    try {
      const res = await fetch(imageUrl);
      const blob = await res.blob();

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "thumbnail.png";
      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
  }

  return (
    <div className="lg:hidden p-4 mt-12">

      <div className="relative w-full aspect-[518/299] bg-[#202226] rounded-[10px] overflow-hidden flex items-center justify-center">

        {image ? (
          <img
            src={image}
            className="w-full rounded-xl object-cover"
            alt="thumbnail"
          />
        ) : (
          <p className="text-gray-400">No image found</p>
        )}

      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 border-t flex gap-3">

        <button
          onClick={() => handleDownload(image)}
          disabled={!image}
          className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl disabled:opacity-50"
        >
          <Download size={18} />
          Download
        </button>

        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 bg-gray-200 text-black py-3 rounded-xl"
        >
          <Share2 size={18} />
          Share
        </button>

      </div>

    </div>
  );
}