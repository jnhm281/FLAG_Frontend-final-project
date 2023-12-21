import { Route, Switch } from "wouter";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageView from "./views/HomePageView";
import AddDestinationView from "./views/AddDestinationView";
import AboutView from "./views/AboutView";
import TripView from "./views/TripView";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" component={HomePageView} />
        <Route path="/addDestination" component={AddDestinationView} />
        <Route path="/about" component={AboutView} />
        <Route path="/trip" component={TripView} />
        <Route>
          <h2>404</h2>
          <p>Ups, something went wrong along the way.</p>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
