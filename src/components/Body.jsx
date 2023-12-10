import Hero from "./Hero";
import RecentTrips from "./RecentTrips";
import OtherTrips from "./OtherTrips";
import Continent from "./Continent;";

function Body() {
  return (
    <>
      <div className="body-home-page">
        <Hero />
        <RecentTrips />
        <OtherTrips />
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

export default Body;
