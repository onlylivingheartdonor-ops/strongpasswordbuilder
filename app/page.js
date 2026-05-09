"use client"

export default function Page() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
        background: "#f4f6fb",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h1>TOOL NAME</h1>
        <p>Replace this with the tool UI.</p>
      </div>

      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h2>How This Works</h2>
        <p>
          Replace this section with an explanation of how the tool works and why it matters.
        </p>
      </div>

      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h2>Related Tools</h2>
        <ul>
          <li onClick={() => window.location.href = "https://creditcarddebtpayoffcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Credit Card Debt Payoff Calculator
          </li>
          <li onClick={() => window.location.href = "https://debtreducingcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Debt Payoff Calculator
          </li>
          <li onClick={() => window.location.href = "https://mysubscriptioncost.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Subscription Cost Calculator
          </li>
          <li onClick={() => window.location.href = "https://emailattachmentsize.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Email Attachment Size Checker
          </li>
        </ul>
      </div>

      <div style={{ fontSize: "0.9rem", color: "#555", marginBottom: "1rem" }}>
        This tool provides estimates for informational purposes only.
      </div>

      <div style={{ fontSize: "0.9rem" }}>
        <span
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => window.location.href = "/privacy"}
        >
          Privacy Policy
        </span>
        {" | "}
        <span
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => window.location.href = "/terms"}
        >
          Terms of Service
        </span>
      </div>
    </main>
  )
}
