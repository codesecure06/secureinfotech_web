import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { gsap } from "gsap/all";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./App.scss";
import "./assets/scss/_navbar.scss";
import "./assets/scss/_footer.scss";
import "./assets/scss/_home.scss";
import "./assets/scss/_about.scss";
import "./assets/scss/_gallery.scss";
import "./assets/scss/_career.scss";
import "./assets/scss/_loader.scss";
// import HomeScreen from "./layout/home/screen/home.screen";
// import AboutScreen from "./layout/about/screen/about.screen";
// import GalleryScreen from "./layout/gallery/screen/gallery.screen";
// import CareerScreen from "./layout/career/screen/career.screen";
// import ContactScreen from "./layout/contact/screen/contact.screen";
// import CareerJob from "./layout/career/screen/components/career_job";
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
  // let appRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(appRef.current, {
  //     duration: 1,
  //   });
  // }, []);

  return (
    <div>
      {/* <Demo /> */}
      <ToastContainer limit={1} />
      <BrowserRouter>
        <Switch>
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
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/career/:jobtitle" component={CareerJobApply} />
            <Route exact path="/contactus" component={Contact} />
            {/* <Route exact path="*" component={() => <div>404</div>} /> */}
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
