function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p>© {new Date().getFullYear()} Siem Teaghes Ogubay</p>

        <div className="social-icons">

          <a 
            href="https://github.com/siemteaghesogubay-git" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a 
            href="https://www.linkedin.com/in/siem-ogubay" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="mailto:siemteaghesogubay@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;