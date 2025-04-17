import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "/src/components/Hero.css";

// Image paths
const desktopTabletImage = "/assets/images/wedding4.JPG";
const mobileImages = [
  "/assets/images/bruno1.JPG",
  "/assets/images/wedding3.JPG",
  "/assets/images/baby_feet.JPG",
  "/assets/images/wedding2.JPG",
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [imageLoaded, setImageLoaded] = useState(false); // To track if image is loaded

  // Function to check screen size
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  // Initial screen size check and resize event listener
  useEffect(() => {
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Image rotation logic for mobile view
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mobileImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Track image load to remove the white space
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
    <section
      className="hero-section"
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${isMobile ? mobileImages[currentImageIndex] : desktopTabletImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out", // Smooth background image transition
      }}
    >
      {/* Fade-in effect for image loading */}
      {!imageLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#fff", // White background until image is loaded
          }}
        />
      )}

      <Container className="d-flex align-items-center justify-content-center h-100 text-white text-center">
        <div>
          <h1 className="display-4 fw-bold">Welcome to Seasons & Stories</h1>
          <p>Every season has a story. Let us capture yours.</p>
        </div>
      </Container>

      {/* Preload and trigger image load */}
      <img
        src={isMobile ? mobileImages[currentImageIndex] : desktopTabletImage}
        alt="hero"
        style={{ display: "none" }}
        onLoad={handleImageLoad}
      />
    </section>
</>
  );
}

export default Hero;
