import Contact from "./components/Contact";
import Data from "./components/Data";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Data />
      <Speakers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
