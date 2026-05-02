"use client";

import GeneratePanel from "@/components/generator/GeneratorPanel";
import { Preview } from "@/components/generator/preview/preview";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

/**
 * TYPES
 */
type FormState = {
  action: string;
  emotions: string[];
  focus: string;
};

export default function Generate() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const [form, setForm] = useState<FormState>({
    action: "",
    emotions: [],
    focus: "",
  });

  const isFormComplete =
    form.action.trim().length > 0 &&
    form.emotions.length > 0 &&
    form.focus.trim().length > 0;

  async function generate() {
    if (!isFormComplete) {
      toast.error("Please complete all fields");
      return;
    }

    let toastId: string | undefined;

    try {
      setLoading(true);

      toastId = toast.loading("Generating image...");

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.status === 403) {
        toast.dismiss(toastId);
        setShowModal(true);
        return;
      }

      if (res.status === 404) {
        toast.error("Session expired", { id: toastId });
        return;
      }

      if (!res.ok) {
        toast.error(data.error || "Something went wrong", {
          id: toastId,
        });
        return;
      }

      setImage(data.image);

      toast.success("Image generated!", {
        id: toastId,
      });
    } catch (err) {
      toast.error("Network error", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("form:", form);
  }, [form]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-24 gap-4 p-4 md:p-6 mt-12">

      {/* LEFT PANEL */}
      <div
        className={`
          col-span-1 md:col-span-24 lg:col-span-11 
          ${image ? "lg:col-start-1" : "lg:col-start-7"}
        `}
      >
        <GeneratePanel
          onGenerate={generate}
          loading={loading}
          form={form}
          setForm={setForm}
        />
      </div>

      {/* RIGHT PANEL */}
      {image && (
        <div className="mt-12 lg:block col-span-1 md:col-span-24 lg:col-span-11 lg:col-start-14">
          <Preview image={image} loading={loading} />
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-[#202226] rounded-2xl p-6 w-[90%] max-w-md shadow-xl">

              <h2 className="text-xl text-[#F0F1F2] font-[600] mb-2">
                No credits left
              </h2>

              <p className="text-[#D3D5D9] mb-4">
                You’ve used all your credits. Get more to continue generating thumbnails.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-[#40444D] text-[#6B7280] rounded-lg py-2"
                >
                  Cancel
                </button>

                <button
                  onClick={() => router.push("/pricing")}
                  className="flex-1 bg-[#0068DF] text-[#F0F1F2] rounded-lg py-2"
                >
                  Get Credits
                </button>
              </div>

            </div>
          </div>
        </>
      )}

      {/* TOASTER */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#202226",
            color: "#F0F1F2",
            border: "1px solid #40444D",
          },
        }}
      />
    </div>
  );
}