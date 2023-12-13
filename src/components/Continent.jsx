import CardContainer from "./CardContainer";

function Continent() {
  return (
    <>
      <section className="continent">
        <div className="continent-img-container">
          <img
            src="\images\Europe.jpg"
            alt="Continent img"
            className="continent-img"
          />
          <h2 className="continent-title">Europe</h2>
        </div>
        <CardContainer />
        {/* <div></div> */}
      </section>
    </>
  );
}

export default Continent;
