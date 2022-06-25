import "./App.css";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import WorkHistory from "./components/WorkHistory";
import { About } from "./components/About";
import { Helmet } from "react-helmet";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App flex flex-col gap-y-20 md:gap-y-14">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yusra </title>
      </Helmet>
      <div id="home">
        <Homepage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <WorkHistory />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
