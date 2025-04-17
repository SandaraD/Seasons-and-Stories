import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <ServicesSection /> {/* Add Services section here */}
      <Footer />
    </div>
  );
}

export default App;
