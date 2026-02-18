import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Products from "./components/Products";
import Models from "./components/Models";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Products />
      <Models />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
