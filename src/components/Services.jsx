import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  {
    title: "Love & Wedding Photography",
    description: "Capturing timeless moments for couples, engagements, and weddings with elegance and creativity.",
    imageSrc: "/assets/images/love_rings.webp",
    bgColor: "#cce3de",
  },
  {
    title: "Family & Baby Photography",
    description: "From newborns to family portraits, we create warm and cherished memories for a lifetime.",
    imageSrc: "/assets/images/fam.png",
    bgColor: "#cce3de",
  },
  {
    title: "Graduation & Achievement Photography",
    description: "Celebrate your milestones with portraits that reflect your success and excitement.",
    imageSrc: "/assets/images/scroll.png",
    bgColor: "#cce3de",
  },
  {
    title: "Event & Party Photography",
    description: "From birthdays to private gatherings, we document the joy and energy of your special celebrations.",
    imageSrc: "/assets/images/party_pooper.png",
    bgColor: "#b8dbd9",
  },
  {
    title: "Pet Photography",
    description: "Adorable and fun portraits that highlight the unique personality of your furry friends.",
    imageSrc: "/assets/images/paw.png",
    bgColor: "#b8dbd9",
  },
  {
    title: "Casual & Lifestyle Shoots",
    description: "Relaxed and stylish portraits that showcase your personality in everyday settings.",
    imageSrc: "/assets/images/peace.png",
    bgColor: "#b8dbd9",
  },
];

function ServicesSection() {
  return (
    <section
  className="py-5"
  style={{
    backgroundColor: "#FFFFFF",
    backgroundImage: `url("https://www.transparenttextures.com/patterns/xv.png")`,
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
  }}
>

      <Container>
        <h2 className="text-center mb-4 fw-bold">Our Services</h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              {" "}
              {/* Changed lg={4} for 3 cards per row */}
              <Card
                className="text-center p-4 border-0 shadow-sm"
                style={{ height: "100%" }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: service.bgColor,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 15px auto",
                  }}
                >
                  {service.imageSrc && (
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      style={{
                        width: service.imageSrc.includes("love_rings.webp")
                          ? "110px"
                          : "40px",
                        height: service.imageSrc.includes("love_rings.webp")
                          ? "110px"
                          : "40px",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;
