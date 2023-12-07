import Hero from "./Hero";
import RecentTrips from "./RecentTrips";
import OtherTrips from "./OtherTrips";

function Body() {
  return (
    <>
      <section className="body-container">
        <Hero />
        <RecentTrips />
        <OtherTrips />
      </section>
    </>
  );
}

export default Body;
