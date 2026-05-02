"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  

  return (
    <div className="text-white flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Payment successful 🎉</h1>
      <p>Your credits have been updated</p>

      <button
       
        className="bg-white text-black px-4 py-2 rounded-lg"
      >
        Go to Dashboard
      </button>

      <button
        className="border px-4 py-2 rounded-lg"
      >
        Refresh Credits
      </button>
    </div>
  );
}