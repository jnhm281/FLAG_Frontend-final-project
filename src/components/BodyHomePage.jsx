import Hero from "./Hero";
import RecentTrips from "./RecentTrips";
import OtherTrips from "./OtherTrips";
import CardContainer from "./CardContainer";
import ScrollToTopButton from "./ScrollToTopButton";

function BodyHomePage() {
  return (
    <>
      <div className="body-home-page">
        <Hero />
        <CardContainer />
        <ScrollToTopButton />
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
