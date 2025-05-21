import AboutSection from "./components/AboutSection";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Membership from "./components/Membership";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <ProductSection />
      <Membership />
      <Footer />
    </div>
  );
};

export default App;
