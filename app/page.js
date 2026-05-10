"use client"

import { useState } from "react"

export default function Page() {
  const [length, setLength] = useState(12)
  const [includeUpper, setIncludeUpper] = useState(true)
  const [includeLower, setIncludeLower] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState("")

  const generatePassword = () => {
    let chars = ""
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz"
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeNumbers) chars += "0123456789"
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}<>?"

    if (!chars) {
      setPassword("Select at least one option")
      return
    }

    let result = ""
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }

    setPassword(result)
  }

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
      {/* TOOL */}
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "10px", marginBottom: "1.5rem" }}>
        <h1>Strong Password Builder</h1>

        <p>Create secure, random passwords instantly.</p>

        <label>Password Length</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
        />

        <div><input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} /> Lowercase</div>
        <div><input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} /> Uppercase</div>
        <div><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} /> Numbers</div>
        <div style={{ marginBottom: "1rem" }}>
          <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} /> Symbols
        </div>

        <button
          onClick={generatePassword}
          style={{ padding: "10px 15px", background: "#0070f3", color: "#fff", border: "none", borderRadius: "5px" }}
        >
          Generate Password
        </button>

        {password && (
          <div style={{ marginTop: "1.5rem" }}>
            <strong>Password:</strong>
            <div style={{ background: "#eee", padding: "10px", borderRadius: "5px" }}>
              {password}
            </div>
          </div>
        )}
      </div>

      {/* HOW IT WORKS */}
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "10px", marginBottom: "1.5rem" }}>
        <h2>How This Works</h2>
        <p>
          This tool generates random passwords using your selected character types. 
          Longer passwords with a mix of uppercase, lowercase, numbers, and symbols are more secure.
        </p>
      </div>

      {/* RELATED TOOLS */}
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "10px", marginBottom: "1.5rem" }}>
        <h2>Related Tools</h2>
        <ul>
          <li onClick={() => window.location.href = "https://creditcarddebtpayoffcalculator.com"}>Credit Card Debt Payoff Calculator</li>
          <li onClick={() => window.location.href = "https://debtreducingcalculator.com"}>Debt Reducing Calculator</li>
          <li onClick={() => window.location.href = "https://sidehustletaxestimator.com"}>Side Hustle Tax Estimator</li>
          <li onClick={() => window.location.href = "https://highyieldsavingscalculator.com"}>High Yield Savings Calculator</li>
          <li onClick={() => window.location.href = "https://retirementsavingsgap.com"}>Retirement Savings Gap</li>
          <li onClick={() => window.location.href = "https://lifeinsurancecoveragecalculator.com"}>Life Insurance Coverage Calculator</li>
          <li onClick={() => window.location.href = "https://onlinecourseroi.com"}>Online Course ROI Calculator</li>
          <li onClick={() => window.location.href = "https://mysubscriptioncost.com"}>Subscription Cost Calculator</li>
          <li onClick={() => window.location.href = "https://emailattachmentsize.com"}>Email Attachment Size Checker</li>
          <li onClick={() => window.location.href = "https://gpacalculator.site"}>GPA Calculator</li>
          <li onClick={() => window.location.href = "https://youtubetitlechecker.com"}>YouTube Title Checker</li>
          <li onClick={() => window.location.href = "https://strongpasswordbuilder.com"}>Strong Password Builder</li>
          <li onClick={() => window.location.href = "https://coolusernamegenerator.com"}>Cool Username Generator</li>
        </ul>
      </div>

      {/* FOOTER */}
      <div style={{ fontSize: "0.9rem" }}>
        <span onClick={() => window.location.href = "/privacy"}>Privacy Policy</span> |{" "}
        <span onClick={() => window.location.href = "/terms"}>Terms of Service</span>
      </div>
    </main>
  )
}