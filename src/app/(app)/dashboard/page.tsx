"use client";

import { useEffect, useState } from "react";
import { MediaContentCard } from "@/components/patterns/card/MediaContentCard";
import SectionHeader from "@/components/patterns/SectionHeader";
import Button from "@/components/ui/button";

type Thumbnail = {
  id: string;
  imageUrl: string;
  prompt: string;
  createdAt: string;
};

function ThumbnailSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="w-full h-40 bg-[#202226] rounded-xl" />
      <div className="h-4 bg-[#202226] rounded w-3/4" />
      <div className="h-3 bg-[#202226] rounded w-1/2" />
    </div>
  );
}

export default function Generate() {
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadThumbnails() {
      try {
        const res = await fetch("/api/thumbnails");
        const data: Thumbnail[] = await res.json();

        setThumbnails(data);
      } catch (err) {
        console.log("Error loading thumbnails", err);
      } finally {
        setLoading(false);
      }
    }

    loadThumbnails();
  }, []);

  async function handleDownload(item: Thumbnail) {
    const res = await fetch(item.imageUrl);
    const blob = await res.blob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "thumbnail.png";
    link.click();

    URL.revokeObjectURL(url);
  }

  async function handleDelete(id: string) {
    if (!id) return;

    try {
      await fetch(`/api/thumbnails/${id}`, {
        method: "DELETE",
      });

      // optimistic UI update
      setThumbnails((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.log("Delete error", err);
    }
  }

  return (
    <div>
      <div className="px-6 mt-8 flex flex-row items-center justify-between">
        <SectionHeader
          title="My Gallery"
          subtitle="Your library of high-CTR thumbnails."
        />

        <div className="hidden lg:block">
          <Button
            onClick={() => {
              window.location.href = "/generate";
            }}
          >
            New Thumbnails
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6 mt-4 pb-24">

        {loading &&
          Array.from({ length: 8 }).map((_, i) => (
            <ThumbnailSkeleton key={i} />
          ))}

        {!loading && thumbnails.length === 0 && (
          <p className="text-gray-500 col-span-full">
            No thumbnails yet. Create your first one 🚀
          </p>
        )}

        {thumbnails.map((item) => (
          <MediaContentCard
            key={item.id}
            image={item.imageUrl}
            title={item.prompt}
            subtitle={new Date(item.createdAt).toDateString()}
            onDelete={() => handleDelete(item.id)}
            onDownload={() => handleDownload(item)}
          />
        ))}
      </div>
    </div>
  );
}