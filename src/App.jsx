import './App.css';
import tldrLogo from './resources/tldr_logo-circular.png';

const App = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={tldrLogo} alt="tldr logo" className="nav-logo-img" />
            <span>tldr</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#download" className="nav-cta">Download</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Supercharge Your AI Interactions</h1>
          <p className="hero-subtitle">tldr enhances AI responses with context from your documents</p>
          <a href="https://mega.nz/file/SYskDZ7C#W7oEsLY6_Vmj8iohKHFowFOJPI3Yl7blrpaarBU0mYc" className="cta-button">
            Download for macOS
            <span className="button-icon">↓</span>
          </a>
        </div>
        <div className="hero-image">
          <img src={tldrLogo} alt="tldr application" className="hero-app-image" />
        </div>
      </section>

      <section className="features" id="features">
        <h2 className="section-title">Why Choose tldr?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Document Retrieval</h3>
            <p>Seamlessly retrieves relevant information from your documents to enhance AI responses.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Contextual Intelligence</h3>
            <p>Provides AI with the context it needs to give you more accurate and relevant answers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Privacy Focused</h3>
            <p>Your documents stay on your device, ensuring your sensitive information remains private.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Native Performance</h3>
            <p>Built specifically for macOS to provide a smooth, responsive experience.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <h2 className="section-title">About tldr</h2>
          <p>
            tldr is a standalone desktop application for macOS that implements RAG 
            (Retrieval Augmented Generation). It enhances AI responses by retrieving 
            relevant information from your documents, providing more accurate and 
            contextually appropriate results.
          </p>
          <p>
            Whether you're researching, writing, or just looking for better answers, 
            tldr helps you get more value from AI by grounding it in your own content.
          </p>
        </div>
      </section>

      <section className="download" id="download">
        <div className="download-content">
          <h2 className="section-title">Get Started Today</h2>
          <p>Experience the power of contextual AI with tldr on your Mac.</p>
          <a href="https://mega.nz/file/SYskDZ7C#W7oEsLY6_Vmj8iohKHFowFOJPI3Yl7blrpaarBU0mYc" className="cta-button">
            Download for macOS
            <span className="button-icon">↓</span>
          </a>
          <p className="version-info">Version 1.0 • Requires macOS 11.0 or later</p>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={tldrLogo} alt="tldr logo" className="footer-logo-img" />
            <span>tldr</span>
          </div>
          <p>&copy; {new Date().getFullYear()} tldr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
