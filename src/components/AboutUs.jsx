import { Container, Row, Col } from "react-bootstrap";

function AboutUsSection() {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-4 fw-bold">About Us</h2>
        <Row className="align-items-center">
          {/* Left Side - 2 Rows x 3 Columns Image Grid */}
          <Col md={6} className="mb-4 mb-md-0">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              <img
                src="/assets/images/sayuri1.JPG"
                alt="Wedding"
                className="rounded shadow-sm"
                style={{ width: "100%", height: "240px", objectFit: "cover" }}
              />
              <img
                src="/assets/images/bruno1.JPG"
                alt="Bruno"
                className="rounded shadow-sm"
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />
              <img
                src="/assets/images/baby1.jpg"
                alt="Baby Feet"
                className="rounded shadow-sm"
                style={{ width: "100%", height: "240px", objectFit: "cover" }}
              />
              <img
                src="/assets/images/wedding3.JPG"
                alt="Wedding Alt"
                className="rounded shadow-sm"
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />
              <img
                src="/assets/images/awurudu2.jpg"
                alt="Awurudu"
                className="rounded shadow-sm"
                style={{ width: "100%", height: "240px", objectFit: "cover" }}
              />
              <img
                src="/assets/images/grad1.JPG"
                alt="Extra"
                className="rounded shadow-sm"
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />
            </div>
          </Col>

          {/* Right Side - About Text */}
          <Col md={6}>
            <p className="text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              <strong>Seasons and Stories</strong> began as a simple hobby during the quiet, reflective
              days of the COVID period. What started as a personal exploration into capturing
              life&apos;s fleeting moments soon blossomed into a deep love for storytelling through
              photography. Over time, this passion grew into what is now <strong>Seasons and Stories</strong>,
              a brand dedicated to preserving the precious moments that make life truly special.
              <br /><br />
              At our core, we believe that photography is about more than just taking pictures—
              it’s about capturing emotions, memories, and the unique stories of each moment.
              Every season, we refine our skills, exploring new techniques and fresh perspectives
              to create visuals that resonate.
              <br /><br />
              <strong>Seasons and Stories</strong> isn’t just about offering photography services;
              it’s about celebrating the moments that weave together the tapestry of our lives.
              As we continue our journey, we remain committed to growing, evolving, and constantly
              improving, ensuring that each client’s experience with us is nothing short of exceptional.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUsSection;
