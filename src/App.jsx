import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageView from "./views/HomePageView";
import AddLocationView from "./views/AddLocationView";
import AboutView from "./views/AboutView";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomePageView} />
        <Route path="/addLocation" component={AddLocationView} />
        <Route path="/about" component={AboutView} />
        <Route>
          <h2>404</h2>
          <p>Ups, something went wrong alog the way.</p>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
