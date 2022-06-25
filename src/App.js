import "./App.css";
import { useRef } from "react";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import WorkHistory from "./components/WorkHistory";
import { About } from "./components/About";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from "./components/Footer";

function App() {
  const contactRef = useRef(null);
  return (
    <HelmetProvider>
    <div className="App flex flex-col justify-between gap-32">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yusra </title>
      </Helmet>
      <div id="home">
        <Homepage />
      </div>
      <div id="about">
        <About contactRef={contactRef} />
      </div>
      <div id="work">
        <WorkHistory />
      </div>
      <div id="contact">
        <Contact forwardedRef={contactRef} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </HelmetProvider>
  );
}

export default App;
