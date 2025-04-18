
import Hero from "./components/Hero";
import ServicesSection from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";
import NavigationBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <section id="home"><Hero /></section>
      <section id="services"><ServicesSection /></section>
      <section id="about"><AboutUs /></section>
      <section id="contact"><ContactSection /></section>
      <Footer />
    </div>
  );
}

export default App;
