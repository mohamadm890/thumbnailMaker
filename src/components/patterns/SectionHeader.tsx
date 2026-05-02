import { ReactNode } from "react";

type Align = "left" | "center";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  align?: Align;
};

export default function SectionHeader({
  title,
  subtitle,
  className = "",
  align = "left",
}: Props) {
  return (
    <div
      className={`mb-6 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      <h2 className="font-sora font-semibold text-[#F0F1F2] text-xl sm:text-2xl lg:text-[28px] leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="font-inter font-normal text-[#A6AAB3] text-sm sm:text-base lg:text-[20px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}