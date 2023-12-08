import CardWrap from "./CardWrap";

function Continent() {
  return (
    <>
      <div className="continent-wrap">
        <img
          src="src\assets\images\Europe.jpg"
          alt="Continent img"
          className="continent-img"
        />
        <CardWrap />
      </div>
    </>
  );
}

export default Continent;
