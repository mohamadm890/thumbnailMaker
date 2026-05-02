import { colors } from "@/components/design-system/colors";

export default function PrivacyPage() {
  return (
    <main
      style={{
        maxWidth: "768px",
        margin: "0 auto",
        padding: "48px 16px",
        color: colors.text.primary,
      }}
    >

      {/* HEADER */}
      <h1
        style={{
          fontSize: "clamp(26px, 3vw, 40px)",
          lineHeight: 1.15,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: colors.text.high,
        }}
      >
        Privacy Policy
      </h1>

      <p
        style={{
          fontSize: "clamp(12px, 1vw, 14px)",
          color: colors.text.muted,
          marginTop: 8,
          marginBottom: 40,
        }}
      >
        Last updated: May 1, 2026
      </p>

      {/* CONTENT */}
      <section style={{ display: "grid", gap: 48 }}>

        {/* SECTION 1 */}
        <div>
          <h2 style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 700,
            marginBottom: 12,
            color: colors.text.high,
          }}>
            1. Information We Collect
          </h2>

          <p style={{ color: colors.text.secondary }}>
            To provide VizThumb, we collect:
          </p>

          <ul
            style={{
              marginTop: 12,
              paddingLeft: 18,
              display: "grid",
              gap: 8,
              color: colors.text.secondary,
              fontSize: "clamp(13px, 1.1vw, 15px)",
            }}
          >
            <li>
              <strong style={{ color: colors.text.high }}>Account Data:</strong>{" "}
              Name, email, profile picture via Clerk.
            </li>

            <li>
              <strong style={{ color: colors.text.high }}>Payment Data:</strong>{" "}
              Processed via Polar.sh (no card storage).
            </li>

            <li>
              <strong style={{ color: colors.text.high }}>Usage Data:</strong>{" "}
              Prompts and generated thumbnails.
            </li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 700,
            marginBottom: 12,
            color: colors.text.high,
          }}>
            2. How We Use Your Information
          </h2>

          <ul
            style={{
              paddingLeft: 18,
              display: "grid",
              gap: 8,
              color: colors.text.secondary,
              fontSize: "clamp(13px, 1.1vw, 15px)",
            }}
          >
            <li>Authenticate your access via Clerk</li>
            <li>Generate images using Gemini API</li>
            <li>Manage billing via Polar.sh</li>
            <li>Improve AI quality and UX</li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 700,
            marginBottom: 12,
            color: colors.text.high,
          }}>
            3. Third-Party Services
          </h2>

          <p style={{ color: colors.text.secondary }}>
            We do not sell data. We only share with essential providers:
          </p>

          <div
            style={{
              marginTop: 16,
              border: `1px solid ${colors.surface.border}`,
              borderRadius: 12,
              overflow: "hidden",
            }}
          >

            {/* HEADER */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                backgroundColor: colors.surface.elevated,
                padding: 12,
                fontSize: 12,
                color: colors.text.muted,
                fontWeight: 600,
              }}
            >
              <div>Provider</div>
              <div>Purpose</div>
            </div>

            {/* ROWS */}
            {[
              ["Clerk", "Authentication & User Management"],
              ["Polar.sh", "Payments & Billing"],
              ["Google (Gemini)", "AI Image Generation"],
            ].map(([name, purpose]) => (
              <div
                key={name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  padding: 12,
                  borderTop: `1px solid ${colors.surface.border}`,
                  fontSize: "clamp(13px, 1.1vw, 14px)",
                  color: colors.text.secondary,
                }}
              >
                <div style={{ color: colors.text.high, fontWeight: 600 }}>
                  {name}
                </div>
                <div>{purpose}</div>
              </div>
            ))}

          </div>
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 700,
            marginBottom: 12,
            color: colors.text.high,
          }}>
            4. Data Retention
          </h2>

          <p style={{
            color: colors.text.secondary,
            lineHeight: 1.6,
            fontSize: "clamp(13px, 1.1vw, 15px)",
          }}>
            We keep your account data while your account is active. You can
            request deletion anytime, which removes your data from our system
            and authentication provider.
          </p>
        </div>

        {/* SECTION 5 */}
        <div>
          <h2 style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 700,
            marginBottom: 12,
            color: colors.text.high,
          }}>
            5. Contact
          </h2>

          <p style={{ color: colors.text.secondary }}>
            For privacy requests:
          </p>

          <a
            href="mailto:support.vizthumb@gmail.com"
            style={{
              color: colors.brand.base,
              fontWeight: 600,
              display: "inline-block",
              marginTop: 6,
              fontSize: "clamp(13px, 1.1vw, 15px)",
            }}
          >
            support.vizthumb@gmail.com
          </a>
        </div>

      </section>
    </main>
  );
}