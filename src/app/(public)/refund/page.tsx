import { colors } from "@/components/design-system/colors";

export default function RefundPage() {
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
        Refund Policy
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
            1. Digital Product Policy
          </h2>

          <p style={{
            color: colors.text.secondary,
            lineHeight: 1.6,
            fontSize: "clamp(13px, 1.1vw, 15px)",
          }}>
            VizThumb is a digital, credit-based service. Once credits are used,
            purchases are generally non-refundable.
          </p>
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 700,
            marginBottom: 12,
            color: colors.text.high,
          }}>
            2. Eligible Refunds
          </h2>

          <p style={{ color: colors.text.secondary }}>
            You may request a refund in the following cases:
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
            <li>Incorrect or duplicate charge</li>
            <li>Credits were not delivered after payment</li>
            <li>Technical issue caused by our system</li>
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
            3. Refund Window
          </h2>

          <p style={{
            color: colors.text.secondary,
            lineHeight: 1.6,
            fontSize: "clamp(13px, 1.1vw, 15px)",
          }}>
            Refund requests must be submitted within 7 days of the purchase date.
          </p>
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 700,
            marginBottom: 12,
            color: colors.text.high,
          }}>
            4. How to Request a Refund
          </h2>

          <p style={{ color: colors.text.secondary }}>
            To request a refund, contact us with your order details:
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

        {/* SECTION 5 */}
        <div>
          <h2 style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            fontWeight: 700,
            marginBottom: 12,
            color: colors.text.high,
          }}>
            5. Chargebacks
          </h2>

          <p style={{
            color: colors.text.secondary,
            lineHeight: 1.6,
            fontSize: "clamp(13px, 1.1vw, 15px)",
          }}>
            Unauthorized chargebacks may result in account suspension and loss
            of access to the service.
          </p>
        </div>

      </section>
    </main>
  );
}
