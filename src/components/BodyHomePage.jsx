import Hero from "./Hero";
import CardContainer from "./CardContainer";
import ScrollToTopButton from "./ScrollToTopButton";

function BodyHomePage() {
  return (
    <>
      <div className="body-home-page">
        <Hero />
        <CardContainer />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default BodyHomePage;
