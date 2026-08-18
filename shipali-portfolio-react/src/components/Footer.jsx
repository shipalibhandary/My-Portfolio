function Footer() {
  return (
    <footer className="footer">

      <div className="social-links">

        <a
          href="https://github.com/shipalibhandary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/shipalibhandary/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          href="mailto:shipalibhandary@gmail.com"
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>

      </div>

      <p>
        Made with <span className="heart">❤️</span> by{" "}
        <span className="name">Shipali</span>
      </p>

      <p className="copyright">
        © 2025 Shipali. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;