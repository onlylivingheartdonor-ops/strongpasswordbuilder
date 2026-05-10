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
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem", background: "#f4f6fb", minHeight: "100vh" }}>
      
      {/* TOOL */}
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "10px", marginBottom: "1.5rem" }}>
        <h1>Strong Password Builder</h1>

        <label>Password Length</label>
        <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} />

        <div><input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} /> Lowercase</div>
        <div><input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} /> Uppercase</div>
        <div><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} /> Numbers</div>
        <div><input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} /> Symbols</div>

        <button onClick={generatePassword}>Generate Password</button>

        {password && <p><strong>Password:</strong> {password}</p>}
      </div>

      {/* HOW IT WORKS */}
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "10px", marginBottom: "1.5rem" }}>
        <h2>How This Works</h2>
        <p>This tool creates random passwords using selected character types. Increasing length and variety improves security.</p>
      </div>

      {/* RELATED TOOLS */}
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "10px", marginBottom: "1.5rem" }}>
        <h2>Related Tools</h2>
        <ul>
          <li onClick={() => window.location.href = "https://creditcarddebtpayoffcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>Credit Card Debt Payoff Calculator</li>
          <li onClick={() => window.location.href = "https://debtreducingcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>Debt Reducing Calculator</li>
          <li onClick={() => window.location.href = "https://sidehustletaxestimator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>Side Hustle Tax Estimator</li>
          <li onClick={() => window.location.href = "https://highyieldsavingscalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>High Yield Savings Calculator</li>
          <li onClick={() => window.location.href = "https://retirementsavingsgap.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>Retirement Savings Gap</li>
          <li onClick={() => window.location.href = "https://lifeinsurancecoveragecalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>Life Insurance Coverage Calculator</li>
          <li onClick={() => window.location.href = "https://onlinecourseroi.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>Online Course ROI Calculator</li>
          <li onClick={() => window.location.href = "https://mysubscriptioncost.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>Subscription Cost Calculator</li>
          <li onClick={() => window.location.href = "https://emailattachmentsize.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>Email Attachment Size Checker</li>
          <li onClick={() => window.location.href = "https://gpacalculator.site"} style={{ cursor: "pointer", textDecoration: "underline" }}>GPA Calculator</li>
          <li onClick={() => window.location.href = "https://youtubetitlechecker.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>YouTube Title Checker</li>
          <li onClick={() => window.location.href = "https://strongpasswordbuilder.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>Strong Password Builder</li>
          <li onClick={() => window.location.href = "https://coolusernamegenerator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>Cool Username Generator</li>
        </ul>
      </div>

      <div style={{ fontSize: "0.9rem" }}>
        <span onClick={() => window.location.href = "/privacy"} style={{ cursor: "pointer", textDecoration: "underline" }}>Privacy Policy</span> |{" "}
        <span onClick={() => window.location.href = "/terms"} style={{ cursor: "pointer", textDecoration: "underline" }}>Terms of Service</span>
      </div>

    </main>
  )
}