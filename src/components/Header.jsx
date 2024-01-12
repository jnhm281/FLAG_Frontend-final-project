import { Link, useRoute } from "wouter";

function Header() {
  const ActiveLink = (props) => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props}>
        <a className={isActive ? "active" : ""}>{props.children}</a>
      </Link>
    );
  };

  return (
    <>
      <div className="header-container">
        <div className="header-identity">
          <Link href="/" className="header-identity-home">
            <span></span>
            <img
              src="/logo/Wordmark-250x150px-RED.svg"
              alt="Wordmark"
              className="header-identity-home-logo"
            />
          </Link>
        </div>
        <div className="header-menu">
          <ActiveLink href="/" className="header-menu-home">
            <i class="fa-solid fa-house"></i>
            <span className="header-menu-home-text">Home</span>
          </ActiveLink>
          <ActiveLink href="/adddestination" className="header-menu-add">
            <i class="fa-solid fa-plus"></i>
            <span className="header-menu-add-text">Add Destination</span>
          </ActiveLink>
          <ActiveLink href="/about" className="header-menu-about">
            <i class="fa-solid fa-user-astronaut"></i>
            <span className="header-menu-about-text">The Traveler</span>
          </ActiveLink>
        </div>
      </div>
    </>
  );
}

export default Header;
