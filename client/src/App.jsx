import "./App.css";
import "./style/main.css";
//import { Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
//import Main from "./pages/Main";

import WelcomeComp from "./components/WelcomeComp";
import ArtistesComp from "./components/ArtistsComp";
import EventsComp from "./components/EventsComp";
import PodcastsComp from "./components/PodcastsComp";
import ShopComp from "./components/ShopComp";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Main} />
      </Switch> */}
      <WelcomeComp />
      <ArtistesComp />
      <ShopComp />
      <PodcastsComp />
      <EventsComp />
    </div>
  );
}

export default App;
