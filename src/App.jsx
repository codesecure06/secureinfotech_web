import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./assets/scss/_navbar.scss";
import "./assets/scss/_footer.scss";
import "./assets/scss/_home.scss";
import "./assets/scss/_about.scss";
import "./assets/scss/_gallery.scss";
import "./assets/scss/_career.scss";
import "./assets/scss/_loader.scss";
import "aos/dist/aos.css";
import Loader from "./layout/_components/loader";
// import "./demo/demo.scss"
// import Demo from "./demo/demo";

const Home = lazy(() => import("./layout/home/screen/home.screen"));
const About = lazy(() => import("./layout/about/screen/about.screen"));
const Gallery = lazy(() => import("./layout/gallery/screen/gallery.screen"));
const Career = lazy(() => import("./layout/career/screen/career.screen"));
const Contact = lazy(() => import("./layout/contact/screen/contact.screen"));
const CareerJobApply = lazy(() =>
  import("./layout/career/screen/career_job_apply")
);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>Loading</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/career/:jobtitle" component={CareerJobApply} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="*" component={() => <div>404</div>} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
