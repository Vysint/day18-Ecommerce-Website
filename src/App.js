import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/Virtual/Virtual";
import "./App.css";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
