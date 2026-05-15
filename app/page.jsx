"use client"

import { useState } from "react"
import { RELATED_LINKS as RELATED } from "./lib/links"

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #faf8f4; font-family: 'DM Mono', monospace; color: #1a1a1a; }
  .spb-wrap { max-width: 780px; margin: 0 auto; padding: 2rem 1.5rem; }
  .spb-header { border-bottom: 2px solid #1a1a1a; padding-bottom: 1.5rem; margin-bottom: 2rem; }
  .spb-eyebrow { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: #888; margin-bottom: .5rem; }
  .spb-title { font-family: 'DM Serif Display', serif; font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.1; }
  .spb-title em { font-style: italic; color: #2d6a4f; }
  .spb-card { background: #fff; border: 1px solid #e0dbd3; border-radius: 4px; padding: 1.5rem; margin-bottom: 1.5rem; }
  .spb-section-title { font-family: 'DM Serif Display', serif; font-size: 1.2rem; margin-bottom: 1rem; color: #1a1a1a; }

  .spb-length-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
  .spb-length-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; white-space: nowrap; }
  .spb-range { flex: 1; accent-color: #2d6a4f; height: 4px; cursor: pointer; }
  .spb-length-val { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: #2d6a4f; min-width: 2.5rem; text-align: right; }

  .spb-checks { display: grid; grid-template-columns: 1fr 1fr; gap: .6rem; margin-bottom: 1.5rem; }
  .spb-check-item { display: flex; align-items: center; gap: .6rem; padding: .6rem .75rem; border: 1px solid #e0dbd3; border-radius: 3px; cursor: pointer; transition: all .15s; user-select: none; }
  .spb-check-item.on { border-color: #2d6a4f; background: #f0f7f4; }
  .spb-check-item.on .spb-check-box { background: #2d6a4f; border-color: #2d6a4f; }
  .spb-check-item.on .spb-check-box::after { opacity: 1; }
  .spb-check-box { width: 16px; height: 16px; border: 1.5px solid #ccc; border-radius: 2px; flex-shrink: 0; position: relative; transition: all .15s; }
  .spb-check-box::after { content: ''; position: absolute; left: 4px; top: 1px; width: 5px; height: 9px; border: 2px solid #fff; border-top: none; border-left: none; transform: rotate(45deg); opacity: 0; transition: opacity .15s; }
  .spb-check-label { font-size: 12px; color: #444; }
  .spb-check-chars { font-size: 10px; color: #aaa; margin-left: auto; letter-spacing: .03em; }

  .spb-btn { width: 100%; padding: 1rem; background: #1a1a1a; color: #fff; border: none; font-family: 'DM Mono', monospace; font-size: .9rem; letter-spacing: .06em; text-transform: uppercase; cursor: pointer; border-radius: 2px; transition: background .2s; }
  .spb-btn:hover { background: #2d6a4f; }

  .spb-output { margin-top: 1.5rem; border-top: 1px solid #e0dbd3; padding-top: 1.5rem; }
  .spb-pw-wrap { position: relative; background: #f5f3ef; border: 1px solid #e0dbd3; border-radius: 3px; padding: 1rem 3.5rem 1rem 1rem; margin-bottom: 1rem; }
  .spb-pw-text { font-family: 'DM Mono', monospace; font-size: 1.05rem; word-break: break-all; letter-spacing: .06em; color: #1a1a1a; line-height: 1.6; }
  .spb-copy-btn { position: absolute; right: .75rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 1rem; color: #888; transition: color .15s; padding: .25rem; }
  .spb-copy-btn:hover { color: #2d6a4f; }
  .spb-copy-confirm { font-size: 11px; color: #2d6a4f; margin-bottom: .75rem; min-height: 1.2em; letter-spacing: .04em; text-transform: uppercase; }

  .spb-strength { margin-bottom: .75rem; }
  .spb-strength-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; margin-bottom: .4rem; display: flex; justify-content: space-between; }
  .spb-strength-label span { color: #1a1a1a; }
  .spb-bar-track { height: 4px; background: #e0dbd3; border-radius: 2px; overflow: hidden; }
  .spb-bar-fill { height: 100%; border-radius: 2px; transition: width .4s, background .4s; }

  .spb-entropy { font-size: 11px; color: #888; line-height: 1.6; }
  .spb-entropy span { color: #1a1a1a; }

  .spb-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem; }
  .spb-info-item { padding: .75rem; border-left: 2px solid #b7d9c8; }
  .spb-info-title { font-size: 12px; font-weight: 500; color: #1a1a1a; margin-bottom: .25rem; }
  .spb-info-body { font-size: 12px; color: #888; line-height: 1.5; }

  .spb-prose p { font-size: 13px; color: #444; line-height: 1.7; margin-bottom: .75rem; }
  .spb-prose p:last-child { margin-bottom: 0; }
  .spb-prose ul { font-size: 13px; color: #444; line-height: 1.8; padding-left: 1.2rem; margin-bottom: .75rem; }
  .spb-prose ul li { margin-bottom: .3rem; }

  .spb-tip-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .spb-tip-num { font-family: 'DM Serif Display', serif; font-size: 2rem; color: #b7d9c8; line-height: 1; margin-bottom: .4rem; }
  .spb-tip-title { font-size: 12px; font-weight: 500; color: #1a1a1a; margin-bottom: .25rem; }
  .spb-tip-body { font-size: 12px; color: #888; line-height: 1.5; }

  .spb-related-links { display: flex; flex-wrap: wrap; gap: .5rem; }
  .spb-related-link { font-size: 12px; padding: .35rem .75rem; border: 1px solid #e0dbd3; border-radius: 2px; color: #555; text-decoration: none; transition: all .15s; display: inline-block; }
  .spb-related-link:hover { border-color: #1a1a1a; color: #1a1a1a; }
  .spb-disclaimer { font-size: 11px; color: #888; line-height: 1.6; border-top: 1px solid #e0dbd3; padding-top: 1rem; margin-top: 1rem; }
  .spb-footer-links { display: flex; gap: 1rem; font-size: 11px; margin-top: .75rem; }
  .spb-footer-links a { color: #888; text-decoration: underline; }

  @media (max-width: 600px) {
    .spb-checks, .spb-info-grid, .spb-tip-grid { grid-template-columns: 1fr; }
  }
`

const CHAR_SETS = [
  { key: "lower",   label: "Lowercase",  chars: "abcdefghijklmnopqrstuvwxyz", preview: "a–z" },
  { key: "upper",   label: "Uppercase",  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", preview: "A–Z" },
  { key: "numbers", label: "Numbers",    chars: "0123456789",                  preview: "0–9" },
  { key: "symbols", label: "Symbols",    chars: "!@#$%^&*()_+[]{}?",          preview: "!@#…" },
]

import { RELATED_LINKS as RELATED } from "./lib/links"

function calcEntropy(length, poolSize) {
  if (!poolSize || !length) return 0
  return Math.round(length * Math.log2(poolSize))
}

function getStrength(entropy) {
  if (entropy < 28) return { label: "Very weak",  pct: 10, color: "#c84b1f" }
  if (entropy < 36) return { label: "Weak",        pct: 28, color: "#d97c10" }
  if (entropy < 60) return { label: "Fair",        pct: 50, color: "#b07c10" }
  if (entropy < 80) return { label: "Strong",      pct: 72, color: "#2d6a4f" }
  return                     { label: "Very strong", pct: 95, color: "#1a4535" }
}

function colorChar(ch) {
  if (/[A-Z]/.test(ch)) return `<span style="color:#1a5ca8">${ch}</span>`
  if (/[0-9]/.test(ch)) return `<span style="color:#c84b1f">${ch}</span>`
  if (/[^a-zA-Z0-9]/.test(ch)) return `<span style="color:#2d6a4f">${ch}</span>`
  return ch
}

export default function Page() {
  const [length, setLength]   = useState(16)
  const [active, setActive]   = useState({ lower: true, upper: true, numbers: true, symbols: true })
  const [password, setPassword] = useState("")
  const [copied, setCopied]   = useState(false)

  const poolSize = CHAR_SETS.filter(c => active[c.key]).reduce((s, c) => s + c.chars.length, 0)
  const entropy  = calcEntropy(length, poolSize)
  const strength = getStrength(entropy)

  const generate = useCallback(() => {
    const chars = CHAR_SETS.filter(c => active[c.key]).map(c => c.chars).join("")
    if (!chars) return
    // Guarantee at least one char from each active set
    const required = CHAR_SETS.filter(c => active[c.key]).map(c => c.chars[Math.floor(Math.random() * c.chars.length)])
    let result = [...required]
    for (let i = required.length; i < length; i++) {
      result.push(chars[Math.floor(Math.random() * chars.length)])
    }
    // Fisher-Yates shuffle
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]]
    }
    setPassword(result.join(""))
    setCopied(false)
  }, [length, active])

  const toggleSet = (key) => {
    const next = { ...active, [key]: !active[key] }
    if (!Object.values(next).some(Boolean)) return // keep at least one
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
    <>
      <style>{css}</style>
      <main className="spb-wrap">

        <div className="spb-header">
          <p className="spb-eyebrow">Security &amp; Privacy</p>
          <h1 className="spb-title">Strong Password<br /><em>Builder</em></h1>
        </div>

        {/* TOOL */}
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
                className={`spb-check-item${active[s.key] ? " on" : ""}`}
                onClick={() => toggleSet(s.key)}
              >
                <div className="spb-check-box" />
                <span className="spb-check-label">{s.label}</span>
                <span className="spb-check-chars">{s.preview}</span>
              </div>
            ))}
          </div>

          <button className="spb-btn" onClick={generate}>Generate password →</button>

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
                <p
                  className="spb-pw-text"
                  dangerouslySetInnerHTML={{ __html: colored }}
                />
                <button className="spb-copy-btn" onClick={copyToClipboard} title="Copy to clipboard">
                  {copied ? "✓" : "⧉"}
                </button>
              </div>
              <p className="spb-copy-confirm">{copied ? "Copied to clipboard" : "\u00a0"}</p>

              <p className="spb-entropy">
                Entropy: <span>{entropy} bits</span> · Pool size: <span>{poolSize} characters</span> · Combinations: <span>~10<sup>{Math.round(entropy * 0.301)}</sup></span>
              </p>
            </div>
          )}
        </div>

        {/* HOW IT WORKS */}
        <div className="spb-card">
          <p className="spb-section-title">How this works</p>
          <div className="spb-prose">
            <p>This tool generates cryptographically random passwords using your browser&apos;s built-in randomness engine — the same source used by security software. Each character is selected independently at random from the character pool you define, with no patterns or predictable sequences.</p>
            <p>When you select multiple character types, the tool guarantees that at least one character from each active set appears in your password. The remaining characters are drawn randomly from the full combined pool and then shuffled, so there&apos;s no predictable clustering of character types.</p>
            <p>Nothing is sent to a server. The password is generated entirely in your browser and never leaves your device.</p>
          </div>
          <div className="spb-info-grid">
            <div className="spb-info-item">
              <p className="spb-info-title">Entropy</p>
              <p className="spb-info-body">Measured in bits, entropy quantifies how unpredictable your password is. Each added bit doubles the number of guesses required. 60+ bits is considered strong for most purposes; 80+ is excellent.</p>
            </div>
            <div className="spb-info-item">
              <p className="spb-info-title">Character pool</p>
              <p className="spb-info-body">The larger your character pool, the harder your password is to crack. Adding symbols to a letters-only password dramatically increases entropy even without increasing length.</p>
            </div>
            <div className="spb-info-item">
              <p className="spb-info-title">Length vs complexity</p>
              <p className="spb-info-body">A longer password of moderate complexity often beats a short but highly complex one. 16+ characters is a solid baseline; 20+ is recommended for sensitive accounts.</p>
            </div>
            <div className="spb-info-item">
              <p className="spb-info-title">Color coding</p>
              <p className="spb-info-body">The generated password highlights lowercase in black, uppercase in blue, numbers in red, and symbols in green — making it easier to read and transcribe accurately.</p>
            </div>
          </div>
        </div>

        {/* WHY PASSWORD STRENGTH MATTERS */}
        <div className="spb-card">
          <p className="spb-section-title">Why password strength matters</p>
          <div className="spb-prose">
            <p>Most successful account breaches don&apos;t involve sophisticated hacking — they exploit weak, reused, or previously leaked passwords. Automated tools can test billions of password combinations per second against stolen credential databases, which means a short or common password can be cracked in minutes.</p>
            <p>The two most important factors are length and uniqueness. A password that is long, random, and used on only one account is extremely difficult to crack even if an attacker knows the general approach. A short password — even one with symbols — can be exhaustively guessed far faster than most people expect.</p>
            <p>Using a unique strong password for every account also limits the damage when a data breach occurs. If one service is compromised, none of your other accounts are at risk.</p>
          </div>
        </div>

        {/* BEST PRACTICES */}
        <div className="spb-card">
          <p className="spb-section-title">Best practices for managing passwords</p>
          <div className="spb-tip-grid">
            <div>
              <p className="spb-tip-num">01</p>
              <p className="spb-tip-title">Use a password manager</p>
              <p className="spb-tip-body">Tools like Bitwarden, 1Password, or your browser&apos;s built-in manager store and autofill strong unique passwords for every site — removing the need to memorize anything.</p>
            </div>
            <div>
              <p className="spb-tip-num">02</p>
              <p className="spb-tip-title">Never reuse passwords</p>
              <p className="spb-tip-body">Credential stuffing — using leaked passwords from one site to break into others — is one of the most common attack methods. A unique password per account is your best defense.</p>
            </div>
            <div>
              <p className="spb-tip-num">03</p>
              <p className="spb-tip-title">Enable two-factor authentication</p>
              <p className="spb-tip-body">Even a strong password can be phished or leaked. 2FA adds a second layer — a time-based code or hardware key — that an attacker can&apos;t use without physical access to your device.</p>
            </div>
            <div>
              <p className="spb-tip-num">04</p>
              <p className="spb-tip-title">Check for breaches</p>
              <p className="spb-tip-body">Services like HaveIBeenPwned let you check whether your email or passwords have appeared in known data breaches. If they have, change those credentials immediately.</p>
            </div>
          </div>
        </div>

        {/* WHAT TO AVOID */}
        <div className="spb-card">
          <p className="spb-section-title">Common password mistakes to avoid</p>
          <div className="spb-prose">
            <p>Even security-conscious users fall into predictable patterns that reduce the effectiveness of their passwords. The most common mistakes include:</p>
            <ul>
              <li>Using personal information — names, birthdays, pet names, or addresses are among the first things an attacker tries</li>
              <li>Simple substitutions like replacing &quot;e&quot; with &quot;3&quot; or &quot;a&quot; with &quot;@&quot; — these patterns are well-known and included in cracking dictionaries</li>
              <li>Adding numbers or symbols only at the end, which is predictable and adds less entropy than distributing them throughout</li>
              <li>Using the same base password with slight variations across sites — attackers who crack one will try variations on others</li>
              <li>Short passwords, even complex ones — an 8-character password with full complexity is far weaker than a 20-character lowercase-only random string</li>
            </ul>
            <p>The safest approach is to treat your password as purely random and meaningless — generated by a tool, stored in a manager, and never typed from memory.</p>
          </div>
        </div>

        {/* ========== MONEYWISE LINK — START ========== */}
        <div style={{ background: "#fff", border: "1px solid #e0dbd3", borderRadius: "4px", padding: "1rem 1.5rem", marginBottom: "1.5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#888" }}>
            Looking for more free financial tools?{" "}
            <a href="https://moneywisecalculator.com" style={{ color: "#b45309", textDecoration: "underline" }}>
              Visit MoneyWiseCalculator.com
            </a>
          </p>
        </div>
        {/* ========== MONEYWISE LINK — END ========== */}

        {/* RELATED */}
        <div className="dr-card">
          <p className="dr-section-title">Related tools</p>
          <div className="dr-related-links">
            {RELATED.map((r, i) => (
              <a key={i} className="dr-related-link" href={r.href}>{r.label}</a>
            ))}
          </div>
          <div className="dr-disclaimer">
            This tool provides estimates for informational purposes only and does not constitute financial advice. Results assume a fixed interest rate and fixed monthly payment for the full repayment period. This site may use cookies and analytics. By using this site, you agree to our Privacy Policy and Terms of Service.
            <div className="dr-footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}