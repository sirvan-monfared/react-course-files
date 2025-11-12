import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import Stats from "./Stats.jsx"
import TeamMembers from "./layouts/TeamMembers.jsx"
import ContactUs from "./layouts/ContactUs.jsx";

import "../index.css";


export default function App() {
  return (
    <>
      <Header/>

      <main class="main">
        <div class="container">
          <Hero/>

          <Stats/>

          
          <TeamMembers/>

          <ContactUs/>

          <section class="features-section">
            <h2 class="section-title">Features</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">🚀</div>
                <h3 class="feature-title">Fast Performance</h3>
                <p class="feature-description">
                  Lightning-fast load times and smooth interactions for the best user experience.
                </p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🔒</div>
                <h3 class="feature-title">Secure & Safe</h3>
                <p class="feature-description">
                  Enterprise-grade security to keep your data protected at all times.
                </p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">📱</div>
                <h3 class="feature-title">Responsive Design</h3>
                <p class="feature-description">
                  Works perfectly on all devices - desktop, tablet, and mobile.
                </p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🎨</div>
                <h3 class="feature-title">Beautiful UI</h3>
                <p class="feature-description">
                  Modern and intuitive interface designed with user experience in mind.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3 class="footer-title">Company</h3>
              <ul class="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div class="footer-section">
              <h3 class="footer-title">Resources</h3>
              <ul class="footer-links">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">API Reference</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
            <div class="footer-section">
              <h3 class="footer-title">Legal</h3>
              <ul class="footer-links">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
            <div class="footer-section">
              <h3 class="footer-title">Connect</h3>
              <div class="social-links">
                <a href="#" class="social-link">
                  Twitter
                </a>
                <a href="#" class="social-link">
                  LinkedIn
                </a>
                <a href="#" class="social-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 Dashboard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
