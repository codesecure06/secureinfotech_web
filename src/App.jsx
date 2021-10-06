import React, { Suspense, lazy, useRef } from "react";
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
import { useEffect } from "react";
import { gsap } from "gsap/all";
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
  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
    });
  }, []);

  return (
    <div ref={appRef}>
      {/* <Demo /> */}
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="loader-main">
              <div className="loader">
                <div className="note-0"></div>
                <div className="note-1"></div>
                <div className="note-2"></div>
                <div className="note-3"></div>
                <div className="note-4"></div>
              </div>
              <div className="status">Loading...</div>
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/career/:jobtitle" component={CareerJobApply} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="*" component={() => <div>404</div>} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
