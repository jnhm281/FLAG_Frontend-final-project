import WorldMap from "./WorldMap";
import Continent from "./Continent";

function OtherTrips() {
  return (
    <>
      <div className="otherTrips-block">
        <span className="block-title">
          <h2>Other trips</h2>
        </span>
        <WorldMap />
        <Continent />
        <Continent />
        <Continent />
        <Continent />
        <Continent />
        <Continent />
      </div>
    </>
  );
}

export default OtherTrips;
