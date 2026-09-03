import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="ai-page">
      <div className="noise" />

      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <header className="navbar">
        <a href="#" className="logo">
          <span className="logo-orb">
            <span />
            <span />
          </span>

          <span className="logo-text">
            Link<span>AI</span>
          </span>
        </a>

        <nav>
          <a href="#features">Features</a>
          <a href="#analytics">Analytics</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="nav-right">
          <button className="login">Log in</button>
          <button className="nav-button">
            Get started
            <span>✦</span>
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="ai-badge">
            <span className="sparkle">✦</span>
            POWERED BY INTELLIGENCE
            <span className="badge-dot" />
          </div>

          <h1>
            Your links,
            <br />
            <span className="gradient-text">but smarter.</span>
          </h1>

          <p className="hero-text">
            Turn boring, complicated URLs into beautiful, intelligent
            links that actually understand your audience.
          </p>

          <div className="url-box">
            <div className="url-input">
              <div className="url-symbol">⌁</div>

              <input
                type="text"
                placeholder="Paste your long URL here..."
              />

              <div className="input-status">
                <span />
                AI READY
              </div>
            </div>

            <button className="magic-button">
              <span>✦</span>
              Shorten
              <b>→</b>
            </button>
          </div>

          <div className="hero-meta">
            <div>
              <span className="check">✓</span>
              Free forever
            </div>

            <div>
              <span className="check">✓</span>
              No credit card
            </div>

            <div>
              <span className="check">✓</span>
              Lightning fast
            </div>
          </div>
        </div>

        <div className="hero-dashboard">
          <div className="dashboard-glow" />

          <div className="floating-chip chip-one">
            <span className="chip-icon purple">✦</span>
            <div>
              <small>AI optimization</small>
              <strong>+38.7%</strong>
            </div>
          </div>

          <div className="dashboard">
            <div className="dashboard-top">
              <div>
                <span className="tiny-label">SMART LINK</span>

                <div className="dashboard-link">
                  <span>linkai.to/</span>
                  <strong>launch</strong>
                </div>
              </div>

              <div className="live-pill">
                <span />
                LIVE
              </div>
            </div>

            <div className="dashboard-divider" />

            <div className="dashboard-stats">
              <div>
                <span>CLICKS</span>
                <strong>84,291</strong>
                <em>+24.8%</em>
              </div>

              <div>
                <span>CTR</span>
                <strong>72.4%</strong>
                <em>+12.1%</em>
              </div>

              <div>
                <span>REACH</span>
                <strong>1.8M</strong>
                <em>+31.6%</em>
              </div>
            </div>

            <div className="chart-area">
              <div className="chart-header">
                <span>ENGAGEMENT</span>
                <span>LAST 24 HOURS</span>
              </div>

              <div className="chart">
                <div className="chart-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  viewBox="0 0 500 170"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#a78bfa"
                        stopOpacity="0.5"
                      />

                      <stop
                        offset="100%"
                        stopColor="#a78bfa"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    className="area"
                    d="M0 145 C30 138 40 122 65 127 C90 132 100 102 130 110 C160 118 170 92 198 99 C225 106 240 71 267 82 C294 93 310 55 338 64 C365 73 382 43 410 51 C440 59 455 25 500 10 L500 170 L0 170 Z"
                  />

                  <path
                    className="line"
                    d="M0 145 C30 138 40 122 65 127 C90 132 100 102 130 110 C160 118 170 92 198 99 C225 106 240 71 267 82 C294 93 310 55 338 64 C365 73 382 43 410 51 C440 59 455 25 500 10"
                  />

                  <circle
                    className="chart-point"
                    cx="410"
                    cy="51"
                    r="5"
                  />
                </svg>
              </div>
            </div>

            <div className="dashboard-bottom">
              <div className="audience">
                <div className="avatars">
                  <span>A</span>
                  <span>M</span>
                  <span>J</span>
                  <span>+</span>
                </div>

                <div>
                  <strong>12.4K</strong>
                  <small>active users</small>
                </div>
              </div>

              <div className="ai-score">
                <div className="score-ring">
                  <span>98</span>
                </div>

                <div>
                  <small>AI SCORE</small>
                  <strong>Excellent</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-chip chip-two">
            <span className="chip-icon green">✓</span>

            <div>
              <small>Conversion</small>
              <strong>68.9%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <span>TRUSTED BY THE NEXT GENERATION OF BUILDERS</span>

        <div className="brands">
          <strong>◈ NOVA</strong>
          <strong>◉ lumen</strong>
          <strong>✦ vertex</strong>
          <strong>◌ orbit</strong>
          <strong>◆ flux</strong>
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-heading">
          <div className="section-badge">✦ SUPERPOWERS</div>

          <h2>
            Not just shorter.
            <br />
            <span>Actually smarter.</span>
          </h2>

          <p>
            Everything you need to turn every click into an intelligent
            growth signal.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card large-card">
            <div className="card-glow purple-glow" />

            <div className="card-number">01</div>

            <div className="feature-icon purple-icon">✦</div>

            <h3>AI-powered links</h3>

            <p>
              Automatically optimize destinations, audiences and
              campaigns with intelligent routing.
            </p>

            <div className="ai-preview">
              <div className="preview-header">
                <span>AI ROUTER</span>
                <span className="online">● ONLINE</span>
              </div>

              <div className="route">
                <span className="route-node">USER</span>
                <i />
                <span className="route-node active">AI</span>
                <i />
                <span className="route-node">BEST PATH</span>
              </div>

              <div className="confidence">
                <span>Confidence</span>
                <strong>97.8%</strong>
              </div>
            </div>
          </article>

          <article className="feature-card">
            <div className="card-number">02</div>

            <div className="feature-icon green-icon">↗</div>

            <h3>Real-time analytics</h3>

            <p>
              Track every click, location, device and conversion as it
              happens.
            </p>

            <div className="mini-metric">
              <strong>+42.8%</strong>
              <span>conversion rate</span>
            </div>
          </article>

          <article className="feature-card" id="security">
            <div className="card-number">03</div>

            <div className="feature-icon blue-icon">⌁</div>

            <h3>Enterprise security</h3>

            <p>
              Secure infrastructure with encrypted links and privacy-first
              analytics.
            </p>

            <div className="security-bar">
              <span>●</span>
              END-TO-END ENCRYPTED
              <b>✓</b>
            </div>
          </article>

          <article className="feature-card wide-card" id="analytics">
            <div className="card-number">04</div>

            <div className="wide-copy">
              <div className="feature-icon orange-icon">◈</div>

              <h3>Made for the future</h3>

              <p>
                One platform for creators, startups, marketers and teams
                building what comes next.
              </p>
            </div>

            <div className="future-orb">
              <div className="orb-core">AI</div>
              <div className="orb-ring ring-a" />
              <div className="orb-ring ring-b" />
              <div className="orb-ring ring-c" />
            </div>
          </article>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-glow" />

        <div className="cta-badge">✦ READY WHEN YOU ARE</div>

        <h2>
          Make your next link
          <br />
          <span>unreasonably good.</span>
        </h2>

        <p>
          Start shortening smarter. No credit card. No complicated setup.
        </p>

        <button className="cta-button">
          Create your first link
          <span>→</span>
        </button>
      </section>

      <footer>
        <div className="footer-logo">
          <span className="logo-orb small">
            <span />
            <span />
          </span>

          Link<span>AI</span>
        </div>

        <span className="copyright">
          © 2027 LinkAI. Built for the future of the internet.
        </span>

        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Status</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
