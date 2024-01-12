import { Route, Switch } from "wouter";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageView from "./views/HomePageView";
import AddDestinationView from "./views/AddDestinationView";
import AboutView from "./views/AboutView";
import TripView from "./views/TripView";
import PageNotFoundView from "./views/PageNotFoundView";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" component={HomePageView} />
        <Route path="/addDestination" component={AddDestinationView} />
        <Route path="/about" component={AboutView} />
        <Route path="/trip/:citySlug">
          {(params) => <TripView city={params.citySlug} />}
        </Route>
        <Route component={PageNotFoundView}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
