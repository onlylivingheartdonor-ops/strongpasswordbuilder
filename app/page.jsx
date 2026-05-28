import PasswordBuilder from "./PasswordBuilder"
import { RELATED_LINKS as RELATED } from "./lib/links"

const staticCss = `
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
  .spb-nav { font-size: 12px; margin-bottom: 1.5rem; }
  .spb-nav a { color: #2d6a4f; text-decoration: none; }
  .spb-nav a:hover { text-decoration: underline; }
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
  .spb-faq-item { border-bottom: 1px solid #e0dbd3; padding: 1rem 0; }
  .spb-faq-item:last-child { border-bottom: none; padding-bottom: 0; }
  .spb-faq-q { font-size: 13px; font-weight: 500; color: #1a1a1a; margin-bottom: .4rem; }
  .spb-faq-a { font-size: 13px; color: #555; line-height: 1.7; }
  .spb-related-links { display: flex; flex-wrap: wrap; gap: .5rem; }
  .spb-related-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; margin-bottom: .75rem; }
  .spb-related-link { font-size: 12px; padding: .35rem .75rem; border: 1px solid #e0dbd3; border-radius: 2px; color: #555; text-decoration: none; transition: all .15s; display: inline-block; }
  .spb-related-link:hover { border-color: #1a1a1a; color: #1a1a1a; }
  .spb-disclaimer { font-size: 11px; color: #888; line-height: 1.6; border-top: 1px solid #e0dbd3; padding-top: 1rem; margin-top: 1rem; }
  .spb-footer-links { display: flex; gap: 1rem; font-size: 11px; margin-top: .75rem; }
  .spb-footer-links a { color: #888; text-decoration: underline; }
  @media (max-width: 600px) {
    .spb-checks, .spb-info-grid, .spb-tip-grid { grid-template-columns: 1fr; }
  }
`

const FAQ = [
  {
    q: "Is it safe to use an online password generator?",
    a: "Yes, as long as the generator works entirely in your browser without sending data to a server — which this tool does. Your password is generated using your browser's built-in cryptographic random number generator and never transmitted anywhere. You can verify this by disconnecting from the internet before generating a password; it will work exactly the same."
  },
  {
    q: "How long should my password be?",
    a: "For most accounts, 16 characters is a solid minimum. For sensitive accounts like email, banking, or password managers, 20 or more characters is recommended. Length is the single most important factor in password strength — a 20-character lowercase-only random password is stronger than an 8-character password using every character type."
  },
  {
    q: "Do I need to include symbols in every password?",
    a: "Not necessarily. Symbols increase the character pool, which improves entropy, but length has a larger effect. Some sites also restrict which symbols are allowed, which can cause issues. If a site limits symbols, compensate by increasing length. For sites with no restrictions, including symbols is generally beneficial."
  },
  {
    q: "What is entropy and why does it matter?",
    a: "Entropy, measured in bits, quantifies how unpredictable your password is. Each additional bit doubles the number of guesses required to crack it. A password with 60 bits of entropy requires roughly a quintillion guesses to crack by brute force — which is infeasible even for powerful computers. 60+ bits is considered strong for most purposes; 80+ is excellent for high-security accounts."
  },
  {
    q: "Should I use the same strong password on multiple sites?",
    a: "Never. Even the strongest password becomes a liability if reused, because data breaches are common — and when a site is breached, attackers immediately try those credentials on other services. This attack is called credential stuffing, and it is highly automated and effective. Use a unique password for every account, stored in a password manager."
  },
  {
    q: "What is a password manager and do I need one?",
    a: "A password manager is software that securely stores all your passwords, generates new ones, and autofills them when you log in. Since you only need to remember one master password, you can use a unique strong password for every account without memorizing anything. Reputable options include Bitwarden (free and open source), 1Password, and the built-in managers in most browsers. For anyone with more than a handful of online accounts, a password manager is strongly recommended."
  },
]

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: staticCss }} />
      <main className="spb-wrap">

        <p className="spb-nav"><a href="https://moneywisecalculator.com">&#8592; More free tools at MoneyWise Calculator</a></p>

        <div className="spb-header">
          <p className="spb-eyebrow">Security &amp; Privacy</p>
          <h1 className="spb-title">Strong Password<br /><em>Builder</em></h1>
        </div>

        <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.7", marginBottom: "1.5rem" }}>
          Free tool to generate cryptographically random passwords. Customize length and character types, then copy your password with one click. Everything runs in your browser — nothing is sent to a server.
        </p>

        {/* INTERACTIVE TOOL — client component */}
        <PasswordBuilder />

        {/* HOW IT WORKS */}
        <div className="spb-card">
          <p className="spb-section-title">How this works</p>
          <div className="spb-prose">
            <p>This tool generates cryptographically random passwords using your browser's built-in randomness engine — the same source used by security software. Each character is selected independently at random from the character pool you define, with no patterns or predictable sequences.</p>
            <p>When you select multiple character types, the tool guarantees that at least one character from each active set appears in your password. The remaining characters are drawn randomly from the full combined pool and then shuffled, so there is no predictable clustering of character types.</p>
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

        {/* WHY IT MATTERS */}
        <div className="spb-card">
          <p className="spb-section-title">Why password strength matters</p>
          <div className="spb-prose">
            <p>Most successful account breaches do not involve sophisticated hacking — they exploit weak, reused, or previously leaked passwords. Automated tools can test billions of password combinations per second against stolen credential databases, which means a short or common password can be cracked in minutes.</p>
            <p>The two most important factors are length and uniqueness. A password that is long, random, and used on only one account is extremely difficult to crack even if an attacker knows the general approach. A short password — even one with symbols — can be exhaustively guessed far faster than most people expect.</p>
            <p>Using a unique strong password for every account also limits the damage when a data breach occurs. If one service is compromised, none of your other accounts are at risk.</p>
          </div>
        </div>
        {/* REAL-WORLD EXAMPLE */}
        <div className="spb-card">
          <p className="spb-section-title">Real-world example: Time to crack common passwords</p>
          <div className="spb-prose">
            <p>How long would it take an attacker to crack different password types? These estimates assume offline cracking on standard hardware.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
            <div style={{ background: "#fff1f2", padding: "1rem", borderRadius: "4px", border: "1px solid #fcd4d4" }}>
              <p style={{ fontSize: "12px", fontWeight: "500", color: "#b91c1c", marginBottom: ".5rem" }}>❌ Weak passwords</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}><strong>"password123"</strong> → Instant</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}><strong>"Qwerty2024"</strong> → Minutes</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}><strong>"Fido2024!"</strong> → Hours</p>
              <p style={{ fontSize: "13px", color: "#b91c1c", fontWeight: "500", marginTop: ".5rem" }}>These are the first passwords attackers try.</p>
            </div>
            
            <div style={{ background: "#f0fdf4", padding: "1rem", borderRadius: "4px", border: "1px solid #b7d9c8" }}>
              <p style={{ fontSize: "12px", fontWeight: "500", color: "#166534", marginBottom: ".5rem" }}>✅ Strong passwords</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}><strong>16 random chars (a-z, A-Z, 0-9, symbols)</strong> → 50+ centuries</p>
              <p style={{ fontSize: "13px", color: "#444", marginBottom: ".5rem" }}><strong>20 random lowercase letters</strong> → 50+ centuries</p>
              <p style={{ fontSize: "13px", color: "#166534", fontWeight: "500", marginTop: ".5rem" }}>These cannot be cracked by brute force — use this tool to generate them.</p>
            </div>
          </div>
          
          <div style={{ marginTop: "1rem", padding: "1rem", background: "#f5f3ef", borderRadius: "4px" }}>
            <p style={{ fontSize: "13px", color: "#1a1a1a", fontWeight: "500", marginBottom: ".25rem" }}>The bottom line:</p>
            <p style={{ fontSize: "13px", color: "#444" }}>The difference between a weak and strong password is <strong>5 minutes of effort</strong> — but the security difference is measured in centuries of cracking time. Use this tool to generate passwords that are impossible to guess and impossible to crack.</p>
          </div>
        </div>
        {/* BEST PRACTICES */}
        <div className="spb-card">
          <p className="spb-section-title">Best practices for managing passwords</p>
          <div className="spb-tip-grid">
            <div>
              <p className="spb-tip-num">01</p>
              <p className="spb-tip-title">Use a password manager</p>
              <p className="spb-tip-body">Tools like Bitwarden, 1Password, or your browser's built-in manager store and autofill strong unique passwords for every site — removing the need to memorize anything.</p>
            </div>
            <div>
              <p className="spb-tip-num">02</p>
              <p className="spb-tip-title">Never reuse passwords</p>
              <p className="spb-tip-body">Credential stuffing — using leaked passwords from one site to break into others — is one of the most common attack methods. A unique password per account is your best defense.</p>
            </div>
            <div>
              <p className="spb-tip-num">03</p>
              <p className="spb-tip-title">Enable two-factor authentication</p>
              <p className="spb-tip-body">Even a strong password can be phished or leaked. 2FA adds a second layer — a time-based code or hardware key — that an attacker cannot use without physical access to your device.</p>
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
              <li>Simple substitutions like replacing "e" with "3" or "a" with "@" — these patterns are well-known and included in cracking dictionaries</li>
              <li>Adding numbers or symbols only at the end, which is predictable and adds less entropy than distributing them throughout</li>
              <li>Using the same base password with slight variations across sites — attackers who crack one will try variations on others</li>
              <li>Short passwords, even complex ones — an 8-character password with full complexity is far weaker than a 20-character lowercase-only random string</li>
            </ul>
            <p>The safest approach is to treat your password as purely random and meaningless — generated by a tool, stored in a manager, and never typed from memory.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="spb-card">
          <p className="spb-section-title">Frequently asked questions</p>
          {FAQ.map((item, i) => (
            <div className="spb-faq-item" key={i}>
              <p className="spb-faq-q">{item.q}</p>
              <p className="spb-faq-a">{item.a}</p>
            </div>
          ))}
        </div>

        {/* RELATED */}
        <div className="spb-card">
          <p className="spb-section-title">Related tools</p>
          <p className="spb-related-label">More free tools from the MoneyWise Calculator network</p>
          <div className="spb-related-links">
            {RELATED.map((r, i) => (
              <a key={i} className="spb-related-link" href={r.href}>{r.label}</a>
            ))}
          </div>
          <div className="spb-disclaimer">
            Passwords are generated entirely in your browser. Nothing is transmitted or stored. This tool uses your browser's built-in cryptographic random number generator. This site uses cookies and analytics. By using this site, you agree to our{" "}
            <a href="/privacy" style={{ color: "#888" }}>Privacy Policy</a> and{" "}
            <a href="/terms" style={{ color: "#888" }}>Terms of Service</a>.
            <div className="spb-footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="https://moneywisecalculator.com">MoneyWise Calculator</a>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
