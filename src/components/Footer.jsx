import { Container, Row, Col } from "react-bootstrap";
import { BsTelephoneFill, BsEnvelopeFill, BsClockFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer
  className="py-5"
  style={{
    backgroundColor: "#3C8A90",
    backgroundImage: `url("https://www.transparenttextures.com/patterns/xv.png")`,
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
    color: "white",
  }}
>

      <Container>
        <Row>
          {/* Left Side - Branding & Message */}
          <Col md={6} className="mb-4">
            <img
              src="/assets/images/logo2.png"
              alt="Seasons & Stories Logo"
              style={{
                width: "180px",
                maxWidth: "100%",
                objectFit: "contain",
                margin: 0,
                padding: 0,
                display: "block",
              }}
            />

            <p className="mx-4" style={{ maxWidth: "400px", color: "#e6e6e6" }}>
              Every season has a story — let us help you tell yours.
            </p>

            <div className="d-flex gap-3 mt-3 mx-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </Col>

          {/* Right Side - Contact Info */}
          <Col md={6}>
            <h6 className="fw-semibold mb-2 mt-4">
              <BsTelephoneFill className="me-2" />
              Call
            </h6>
            <p className="mb-4 text-light">+94 76 721 2630</p>

            <h6 className="fw-semibold mb-2 mt-4">
              <BsEnvelopeFill className="me-2" />
              Email
            </h6>
            <p className="mb-3 text-light">seasonsandstoriesbysandra@gmail.com</p>

            <h6 className="fw-semibold mb-2 mt-4">
              <BsClockFill className="me-2" />
              Open Hours
            </h6>
            <p className="text-light">Mon - Sat: 9AM - 5PM</p>
          </Col>
        </Row>

        {/* Bottom line */}
        <hr className="mt-4 text-white" />
        <p className="text-center text-white small mb-0">
          © 2025 Seasons & Stories. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
