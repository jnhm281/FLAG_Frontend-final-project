import { Link } from "wouter";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-identity">
          <Link href="/" className="header-identity-home">
            <span></span>
            <img
              src="/logo/Wordmark-250x150px-DM.svg"
              alt="Wordmark"
              className="header-identity-home-logo"
            />
          </Link>
        </div>
        <div className="header-menu">
          <Link href="/" className="header-menu-home">
            <i class="fa-solid fa-house"></i>
            <span className="header-menu-home-text">Home</span>
          </Link>
          <Link href="/adddestination" className="header-menu-add">
            <i class="fa-solid fa-plus"></i>
            <span className="header-menu-add-text">Add Destination</span>
          </Link>
          <Link href="/about" className="header-menu-about">
            <i class="fa-solid fa-user-astronaut"></i>
            <span className="header-menu-about-text">The Traveler</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
