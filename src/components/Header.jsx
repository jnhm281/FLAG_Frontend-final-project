import Identity from "./Identity";
import Menu from "./Menu";

function Header() {
  return (
    <>
      <div className="header-container">
        <Identity />
        <Menu />
      </div>
    </>
  );
}

export default Header;
