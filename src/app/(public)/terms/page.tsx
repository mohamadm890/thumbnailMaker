import { colors } from "@/components/design-system/colors";

export default function TermsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.surface.deepest,
        transition: "background-color 300ms ease",
      }}
    >
      <main
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          padding: "64px 24px",
          color: colors.text.primary,
        }}
      >

        {/* HEADER */}
        <header style={{ marginBottom: 48 }}>
          <h1
            style={{
              fontSize: "clamp(28px, 3vw, 42px)",
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: colors.text.high,
            }}
          >
            Terms of Service
          </h1>

          <p
            style={{
              fontSize: "clamp(12px, 1vw, 14px)",
              color: colors.text.muted,
              marginTop: 8,
            }}
          >
            Last updated:{" "}
            <span style={{ color: colors.text.secondary }}>May 1, 2026</span>
          </p>
        </header>

        {/* CONTENT */}
        <section style={{ display: "grid", gap: 48 }}>

          {/* 01 */}
          <div>
            <h2
              style={{
                fontSize: "clamp(18px, 2vw, 24px)",
                fontWeight: 700,
                marginBottom: 12,
                color: colors.text.high,
              }}
            >
              01. Description of Service
            </h2>

            <p
              style={{
                lineHeight: 1.6,
                fontSize: "clamp(13px, 1.1vw, 15px)",
                color: colors.text.secondary,
              }}
            >
              VizThumb provides an AI-powered thumbnail generator using{" "}
              <strong style={{ color: colors.text.high }}>Gemini API</strong>.
            </p>
          </div>

          {/* 02 */}
          <div>
            <h2 style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 700,
              marginBottom: 12,
              color: colors.text.high,
            }}>
              02. Accounts and Authentication
            </h2>

            <p style={{
              lineHeight: 1.6,
              fontSize: "clamp(13px, 1.1vw, 15px)",
              color: colors.text.secondary,
            }}>
              We use <strong style={{ color: colors.text.high }}>Clerk</strong>{" "}
              for authentication and account management.
            </p>
          </div>

          {/* 03 */}
          <div>
            <h2 style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 700,
              marginBottom: 12,
              color: colors.text.high,
            }}>
              03. Payments and Credits
            </h2>

            <p style={{
              color: colors.text.secondary,
              marginBottom: 16,
              fontSize: "clamp(13px, 1.1vw, 15px)",
            }}>
              Payments are processed via{" "}
              <strong style={{ color: colors.text.high }}>Polar.sh</strong>.
            </p>

            <ul
              style={{
                display: "grid",
                gap: 10,
                paddingLeft: 16,
                fontSize: "clamp(13px, 1.1vw, 15px)",
              }}
            >
              <li style={{ color: colors.text.secondary }}>
                • Credits are non-transferable
              </li>

              <li style={{ color: colors.danger.base }}>
                • No refunds due to GPU costs
              </li>
            </ul>
          </div>

          {/* 04 */}
          <div>
            <h2 style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 700,
              marginBottom: 12,
              color: colors.text.high,
            }}>
              04. AI Content Rights
            </h2>

            <p style={{
              color: colors.text.secondary,
              marginBottom: 16,
              lineHeight: 1.6,
              fontSize: "clamp(13px, 1.1vw, 15px)",
            }}>
              You own your outputs but must follow usage rules.
            </p>

            {/* GRID CARDS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {[
                "Illegal or harmful imagery",
                "Violating API policies",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: 16,
                    borderRadius: 12,
                    backgroundColor: colors.surface.elevated,
                    border: `1px solid ${colors.surface.border}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(12px, 1vw, 14px)",
                      color: colors.text.secondary,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <footer
            style={{
              borderTop: `1px solid ${colors.surface.border}`,
              paddingTop: 32,
            }}
          >
            <h2
              style={{
                fontSize: "clamp(16px, 1.5vw, 18px)",
                fontWeight: 700,
                marginBottom: 12,
                color: colors.text.high,
              }}
            >
              Questions?
            </h2>

            <a
              href="mailto:support.vizthumb@gmail.com"
              style={{
                color: colors.brand.base,
                fontWeight: 600,
                fontSize: "clamp(13px, 1.1vw, 15px)",
              }}
            >
              support.vizthumb@gmail.com
            </a>
          </footer>

        </section>
      </main>
    </div>
  );
}