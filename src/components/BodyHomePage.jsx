import Hero from "./Hero";
import RecentTrips from "./RecentTrips";
import OtherTrips from "./OtherTrips";
import CardContainer from "./CardContainer";

function BodyHomePage() {
  return (
    <>
      <div className="body-home-page">
        <Hero />
        <CardContainer />
        {/* <RecentTrips />
        <OtherTrips />
        <Continent />
        <Continent />
        <Continent />
        <Continent />
        <Continent /> */}
      </div>
    </>
  );
}

export default BodyHomePage;
