import { Link } from "wouter";

function Header() {
  return (
    <>
      <div className="header">
        <div className="identity">
          <Link href="/">
            <img
              src="/logo/Wordmark-250x150px-DM.svg"
              alt="Wordmark"
              className="identity-logo"
            />
          </Link>
        </div>
        <div className="menu">
          <Link href="/" className="menu-home">
            Home
          </Link>
          <Link href="/adddestination" className="menu-add">
            Add Destination
          </Link>
          <Link href="/about" className="menu-about">
            The Traveler
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
