import "./App.css";
import { useRef } from "react";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import WorkHistory from "./components/WorkHistory";
import { About } from "./components/About";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "./components/Footer";
import Menu from './components/Menu'

import ReactGA from "react-ga";
import { Route, Routes } from "react-router";

function App() {
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null)
  const proRef = useRef(null)
  const TRACKING_ID = "G-ZHQ5T9F8NT"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  
  return (
    <HelmetProvider>
      <div className="App flex flex-col justify-between gap-32 bg-mainBg">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Yusra. </title>
        </Helmet>
        {/* <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<WorkHistory/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes> */}
        <Menu homeRef={homeRef} aboutRef={aboutRef} proRef={proRef} contactRef={contactRef} />
        <div id="home">
          <Homepage homeRef={homeRef} />
        </div>
        <div id="about">
          <About aboutRef={aboutRef} contactRef={contactRef} />
        </div>
        <div id="project" >
          <WorkHistory  proRef={proRef}/>
        </div>
        <div id="contact">
          <Contact forwardedRef={contactRef}/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
