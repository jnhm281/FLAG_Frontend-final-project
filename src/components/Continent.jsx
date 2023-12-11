import CardContainer from "./CardContainer";

function Continent() {
  return (
    <>
      <section className="continent">
        <div className="continent-img-container">
          <img
            src="src\assets\images\Europe.jpg"
            alt="Continent img"
            className="continent-img"
          />
        </div>
        <CardContainer />
        {/* <div></div> */}
      </section>
    </>
  );
}

export default Continent;
