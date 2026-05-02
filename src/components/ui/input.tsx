import { inputStyles } from "../design-system/compountStyles/inputStyles";
import { useState } from "react";

type InputSize = "sm" | "md" | "lg";

// 🔥 extend native input props
type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  size?: InputSize;
  error?: boolean;
};

export default function Input({
  label,
  error,
  style: customStyle,
  ...props // ✅ value, onChange, placeholder, etc.
}: Props) {
  const [focus, setFocus] = useState(false);

  const style = {
    ...inputStyles.base,
    ...inputStyles.variants,
    ...(focus ? inputStyles.states.focus : {}),
    ...(error ? inputStyles.states.error : {}),
    ...customStyle, // ✅ allow override
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      
      {label && (
        <label
          style={{
            fontSize: "14px",
            color: error ? "#EF4444" : "#A6AAB3",
            fontWeight: 500,
          }}
        >
          {label}
        </label>
      )}

      <input
        {...props} // ✅ this is the magic
        style={style}
        onFocus={(e) => {
          setFocus(true);
          props.onFocus?.(e); // keep user handler
        }}
        onBlur={(e) => {
          setFocus(false);
          props.onBlur?.(e);
        }}
      />
    </div>
  );
}