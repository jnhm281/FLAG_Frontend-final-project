import { Link } from "wouter";

function Header() {
  return (
    <>
      <div className="header">
        <div className="identity">
          <Link href="">
            <img
              src="src\assets\logo\Wordmark-White-250x150.svg"
              alt="Wordmark"
              className="identity-logo"
            />
          </Link>
        </div>
        <div className="menu">
          <Link href="/" className="menu-home">
            Home
          </Link>
          <Link href="/addlocation" className="menu-add">
            Add Location
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
