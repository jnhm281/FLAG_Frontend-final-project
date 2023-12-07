import Identity from "./Identity";
import Menu from "./Menu";

function Header() {
  return (
    <>
      <section className="header-container">
        <Identity />
        <Menu />
      </section>
    </>
  );
}

export default Header;
