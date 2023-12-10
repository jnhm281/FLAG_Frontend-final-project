function Header() {
  return (
    <>
      <div className="header">
        <div className="identity">
          <a href="">
            <img
              src="src\assets\logo\Wordmark-White-250x150.svg"
              alt="Wordmark"
              className="identity-logo"
            />
          </a>
        </div>
        <div className="menu">
          <a href="" className="menu-home">
            Home
          </a>
          <a href="" className="menu-add">
            Add Location
          </a>
          <a href="" className="menu-about">
            The Traveler
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
