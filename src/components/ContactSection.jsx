import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { BsTelephoneFill, BsEnvelopeFill, BsClockFill } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function ContactSection() {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lmnlp8g",      
        "template_gnsg8i9",     
        formRef.current,
        "wB-ectfHazu8oY21K"       
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          setError(null);
          formRef.current.reset();

          // Clear success message after 5 seconds
          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        },
        (error) => {
          console.error("Error:", error.text);
          setError("Something went wrong. Please try again.");
        }
      );
  };

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
    <h2 className="text-center fw-bold mb-5" style={{ color: "#000000" }}>
      Get in Touch
    </h2>

    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <Card className="p-4 shadow border-0" style={{ borderRadius: "20px", backgroundColor: "#ffffff" }}>
          <p className="text-muted mb-4">
            It is indeed a pleasure to know that you are interested in what we do here at Seasons & Stories.
          </p>

          <Form ref={formRef} onSubmit={sendEmail}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label className="fw-semibold">Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label className="fw-semibold">Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label className="fw-semibold">Subject</Form.Label>
              <Form.Control type="text" name="subject" placeholder="Subject" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label className="fw-semibold">Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} placeholder="Your message" required />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#CBE3DE",
                borderColor: "#007A74",
                color: "#007A74",
                borderRadius: "30px",
                padding: "10px 30px",
              }}
            >
              Send Message
            </Button>

            {isSent && <p className="text-success mt-3">Message sent successfully!</p>}
            {error && <p className="text-danger mt-3">{error}</p>}
          </Form>
        </Card>
      </Col>
    </Row>
  </Container>
</section>

  );
}

export default ContactSection;
