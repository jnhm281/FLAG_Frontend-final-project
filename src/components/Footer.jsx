import { Link, useRoute } from "wouter";
import { useState } from "react";

function Footer() {
  const ActiveLink = (props) => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props}>
        <a className={isActive ? "active" : ""}>{props.children}</a>
      </Link>
    );
  };

  const [mailData, setMailData] = useState({
    mail: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setMailData((data) => ({ mail: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email submited: ", mailData);

    setMailData({
      mail: "",
    });
  };

  return (
    <>
      <div className="footer-container">
        <ul className="footer-navigation">
          <li className="footer-navigation-list">
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li className="footer-navigation-list">
            <ActiveLink href="/adddestination">Add Destination</ActiveLink>
          </li>
          <li className="footer-navigation-list">
            <ActiveLink href="/about">The Traveler</ActiveLink>
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
          <form
            className="footer-contacts-text"
            id="mail-form"
            action=""
            method="get"
            onSubmit={handleSubmit}
          >
            <p>Leave your email, we'll get in touch with you.</p>
            <label className="email-label" for="email-submit">
              <input
                id="email-submit"
                className="email-input"
                type="email"
                placeholder="Enter Your Email here..."
                value={mailData.mail}
                onChange={(event) => handleChange(event)}
              />
              <button className="email-button">Send</button>
            </label>
          </form>
          <div className="footer-contacts-copyright">
            <p>All Photo rights // Unsplash</p>
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
