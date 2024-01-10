function Footer() {
  return (
    <>
      <div className="footer-container">
        <ul className="footer-navigation">
          <li className="footer-navigation-list">
            <a href="/">Home</a>
          </li>
          <li className="footer-navigation-list">
            <a href="/adddestination">Add Destination</a>
          </li>
          <li className="footer-navigation-list">
            <a href="/about">The Traveler</a>
          </li>
        </ul>
        <div className="footer-social-media">
          <a href="https://www.facebook.com/jmagalhães01">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/jnhmag">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="footer-contacts">
          <div className="footer-contacts-text">
            <p>Leave your email, we'll get in touch with you.</p>
            <label className="email-label">
              <input
                className="email-input"
                type="email"
                placeholder="Enter Your Email here..."
              />
              <button className="email-button">Send</button>
            </label>
          </div>
          <div className="footer-contacts-copyright">
            <p>
              <i class="fa-regular fa-copyright"></i>
              2024 João Magalhães
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
