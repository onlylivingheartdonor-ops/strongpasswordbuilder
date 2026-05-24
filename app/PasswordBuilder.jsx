"use client"

import { useState, useCallback } from "react"

const CHAR_SETS = [
  { key: "lower",   label: "Lowercase",  chars: "abcdefghijklmnopqrstuvwxyz", preview: "a-z" },
  { key: "upper",   label: "Uppercase",  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", preview: "A-Z" },
  { key: "numbers", label: "Numbers",    chars: "0123456789",                  preview: "0-9" },
  { key: "symbols", label: "Symbols",    chars: "!@#$%^&*()_+[]{}?",          preview: "!@#..." },
]

function calcEntropy(length, poolSize) {
  if (!poolSize || !length) return 0
  return Math.round(length * Math.log2(poolSize))
}

function getStrength(entropy) {
  if (entropy < 28) return { label: "Very weak",   pct: 10, color: "#c84b1f" }
  if (entropy < 36) return { label: "Weak",         pct: 28, color: "#d97c10" }
  if (entropy < 60) return { label: "Fair",          pct: 50, color: "#b07c10" }
  if (entropy < 80) return { label: "Strong",        pct: 72, color: "#2d6a4f" }
  return                    { label: "Very strong",  pct: 95, color: "#1a4535" }
}

function colorChar(ch) {
  if (/[A-Z]/.test(ch)) return `<span style="color:#1a5ca8">${ch}</span>`
  if (/[0-9]/.test(ch)) return `<span style="color:#c84b1f">${ch}</span>`
  if (/[^a-zA-Z0-9]/.test(ch)) return `<span style="color:#2d6a4f">${ch}</span>`
  return ch
}

export default function PasswordBuilder() {
  const [length,   setLength]   = useState(16)
  const [active,   setActive]   = useState({ lower: true, upper: true, numbers: true, symbols: true })
  const [password, setPassword] = useState("")
  const [copied,   setCopied]   = useState(false)

  const poolSize = CHAR_SETS.filter(c => active[c.key]).reduce((s, c) => s + c.chars.length, 0)
  const entropy  = calcEntropy(length, poolSize)
  const strength = getStrength(entropy)

  const generate = useCallback(() => {
    const chars = CHAR_SETS.filter(c => active[c.key]).map(c => c.chars).join("")
    if (!chars) return
    const required = CHAR_SETS.filter(c => active[c.key]).map(c => c.chars[Math.floor(Math.random() * c.chars.length)])
    let result = [...required]
    for (let i = required.length; i < length; i++) {
      result.push(chars[Math.floor(Math.random() * chars.length)])
    }
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]]
    }
    setPassword(result.join(""))
    setCopied(false)
  }, [length, active])

  const toggleSet = (key) => {
    const next = { ...active, [key]: !active[key] }
    if (!Object.values(next).some(Boolean)) return
    setActive(next)
  }

  const copyToClipboard = () => {
    if (!password) return
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const colored = password ? password.split("").map(colorChar).join("") : ""

  return (
    <div className="spb-card">
      <div className="spb-length-row">
        <span className="spb-length-label">Length</span>
        <input
          type="range" min="8" max="64" step="1"
          className="spb-range"
          value={length}
          onChange={e => setLength(Number(e.target.value))}
        />
        <span className="spb-length-val">{length}</span>
      </div>

      <div className="spb-checks">
        {CHAR_SETS.map(s => (
          <div
            key={s.key}
            className={"spb-check-item" + (active[s.key] ? " on" : "")}
            onClick={() => toggleSet(s.key)}
          >
            <div className="spb-check-box" />
            <span className="spb-check-label">{s.label}</span>
            <span className="spb-check-chars">{s.preview}</span>
          </div>
        ))}
      </div>

      <button className="spb-btn" onClick={generate}>Generate password</button>

      {password && (
        <div className="spb-output">
          <div className="spb-strength">
            <div className="spb-strength-label">
              <span>Password strength</span>
              <span>{strength.label}</span>
            </div>
            <div className="spb-bar-track">
              <div className="spb-bar-fill" style={{ width: strength.pct + "%", background: strength.color }} />
            </div>
          </div>

          <div className="spb-pw-wrap">
            <p className="spb-pw-text" dangerouslySetInnerHTML={{ __html: colored }} />
            <button className="spb-copy-btn" onClick={copyToClipboard} title="Copy to clipboard">
              {copied ? "✓" : "⧉"}
            </button>
          </div>
          <p className="spb-copy-confirm">{copied ? "Copied to clipboard" : "\u00a0"}</p>

          <p className="spb-entropy">
            Entropy: <span>{entropy} bits</span> &middot; Pool size: <span>{poolSize} characters</span> &middot; Combinations: <span>~10<sup>{Math.round(entropy * 0.301)}</sup></span>
          </p>
        </div>
      )}
    </div>
  )
}
