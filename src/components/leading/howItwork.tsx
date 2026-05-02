import {
  Type,
  Sparkles,
  Target,
  Wand2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Type,
    color: "text-blue-500",
    title: "Enter Video Title",
    desc: "Type your video topic like travel vlog, food review, or luxury trip.",
  },
  {
    icon: Sparkles,
    color: "text-pink-500",
    title: "Select Style (Emotion)",
    desc: "Choose Shock, Viral, Cinematic, or Mystery.",
  },
  {
    icon: Target,
    color: "text-green-500",
    title: "Select Focus Point",
    desc: "Pick what should stand out: face, food, place, or action.",
    span: true,
  },
  {
    icon: Wand2,
    color: "text-purple-500",
    title: "Click Generate",
    desc: "AI combines your inputs into a high-click thumbnail concept.",
  },
  {
    icon: Rocket,
    color: "text-orange-500",
    title: "Get Viral Output",
    desc: "Receive an AI-optimized prompt or ready thumbnail for maximum clicks.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 text-center">

      {/* TITLE */}
      <h2
        style={{
          fontSize: "clamp(22px, 2.5vw, 32px)",
          lineHeight: 1.25,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontFamily: "Sora, sans-serif",
        }}
        className="mb-10 text-white"
      >
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={i}
              className={`p-6 border border-[#40444D] rounded-2xl hover:scale-[1.02] transition text-left ${
                step.span ? "md:col-span-2" : ""
              }`}
            >

              {/* ICON */}
              <Icon className={`w-6 h-6 ${step.color} mb-3`} />

              {/* TITLE */}
              <h3
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  fontFamily: "Sora, sans-serif",
                }}
                className="text-white mb-1"
              >
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: "clamp(13px, 1.2vw, 16px)",
                  lineHeight: 1.5,
                  fontWeight: 400,
                  fontFamily: "Inter, sans-serif",
                }}
                className="text-[#A6AAB3]"
              >
                {step.desc}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
}