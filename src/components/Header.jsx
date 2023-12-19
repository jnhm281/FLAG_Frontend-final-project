import { Link } from "wouter";

function Header() {
  return (
    <>
      <div className="header">
        <div className="identity">
          <Link href="/" className="identity-home">
            <span></span>
            <img
              src="/logo/Wordmark-250x150px-DM.svg"
              alt="Wordmark"
              className="identity-logo"
            />
          </Link>
        </div>
        <div className="menu">
          <Link href="/" className="menu-home">
            <i class="fa-solid fa-house"></i>
            <span className="menu-text">Home</span>
          </Link>
          <Link href="/adddestination" className="menu-add">
            <i class="fa-solid fa-plus"></i>
            <span className="menu-text">Add Destination</span>
          </Link>
          <Link href="/about" className="menu-about">
            <i class="fa-solid fa-user-astronaut"></i>
            <span className="menu-text">The Traveler</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
