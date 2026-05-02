"use client";

import ChipGroup from "../patterns/ChipGroup";
import SectionHeader from "../patterns/SectionHeader";
import Button from "../ui/button";
import Dropdown from "../ui/dropdown";
import Input from "../ui/input";
import { useRouter } from "next/navigation";

import {
  User,
  Package,
  Mountain,
  Zap,
  GitCompare,
  Loader2,
} from "lucide-react";

/**
 * TYPES
 */
type FormState = {
  action: string;
  emotions: string[];
  focus: string;
};

type Props = {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  loading: boolean;
  onGenerate: (form: FormState) => void;
};

/**
 * OPTIONS
 */
const chipOptions = [
  { label: "INSANE 😱", value: "insane" },
  { label: "SHOCK 😲", value: "shock" },
  { label: "IMPOSSIBLE 🤯", value: "impossible" },
  { label: "WIN 🏆", value: "win" },
  { label: "LOSE 💔", value: "lose" },
  { label: "SPEED ⚡", value: "speed" },
  { label: "RISK 🚨", value: "risk" },
  { label: "CHALLENGE 💪", value: "challenge" },
  { label: "MONEY 💰", value: "money" },
  { label: "SURVIVAL 🌍", value: "survival" },
];

/**
 * COMPONENT
 */
const GeneratePanel = ({
  onGenerate,
  loading,
  setForm,
  form,
}: Props) => {
  const router = useRouter();

  return (
    <div>
      <SectionHeader
        title="Generate Thumbnail"
        subtitle="Create high-converting thumbnails in seconds."
      />

      <div className="flex flex-col gap-4">
        <Input
          label="What did you do in your video?"
          placeholder="e.g. I made money with AI in 24 hours"
          value={form.action}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm((prev) => ({
              ...prev,
              action: e.target.value,
            }))
          }
        />

        {/* EMOTIONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: "14px", color: "#A6AAB3", fontWeight: 500 }}>
            How should viewers feel?
          </label>

          <ChipGroup
            value={form.emotions}
            multiple={true}
            options={chipOptions}
            onChange={(values: string[]) =>
              setForm((prev) => ({
                ...prev,
                emotions: values,
              }))
            }
          />
        </div>

        {/* FOCUS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: "14px", color: "#A6AAB3", fontWeight: 500 }}>
            What should viewers notice first?
          </label>

          <Dropdown
            value={form.focus}
            placeholder="Person"
            options={[
              { label: "Person", value: "person", icon: User },
              { label: "Object", value: "object", icon: Package },
              { label: "Scene", value: "scene", icon: Mountain },
              { label: "Action", value: "action", icon: Zap },
              { label: "Comparison", value: "comparison", icon: GitCompare },
            ]}
            onChange={(value: string) =>
              setForm((prev) => ({
                ...prev,
                focus: value,
              }))
            }
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-12">
        <Button
          fullWidth
          onClick={() => onGenerate(form)} // ✅ FIXED
          disabled={loading}
          className={loading ? "opacity-60 cursor-not-allowed" : ""}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin" size={18} />
              Generating...
            </span>
          ) : (
            "Generate"
          )}
        </Button>
      </div>
    </div>
  );
};

export default GeneratePanel;