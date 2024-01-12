import BodyHomePage from "../components/BodyHomePage";
import ScrollToTopButton from "../components/ScrollToTopButton";

function HomePageView() {
  return (
    <>
      <div className="home-page">
        <BodyHomePage />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default HomePageView;
