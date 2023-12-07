import WorldMap from "./WorldMap";
import Continent from "./Continent";

function OtherTrips() {
  return (
    <>
      <div className="otherTrips-block">
        <h2>Other trips</h2>
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
