import CardContainer from "./CardContainer";

function Continent() {
  return (
    <>
      <section className="continent-container">
        <div className="continent-title">
          <img
            src="/images/Europe.jpg"
            alt="Continent img"
            className="continent-title-img"
          />
          <h2 className="continent-title-text">Europe</h2>
        </div>
        <CardContainer />
      </section>
    </>
  );
}

export default Continent;
