import CardContainer from "./CardContainer";

function Continent() {
  return (
    <>
      <section className="continent">
        <div className="continent-img-container">
          <img
            src="/images/Europe.jpg"
            alt="Continent img"
            className="continent-img"
          />
        </div>
        <div className="section-title">
          <h2>Europe</h2>
        </div>
        <CardContainer />
        {/* <div></div> */}
      </section>
    </>
  );
}

export default Continent;
