import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Card className="shadow-sm contactUsCard rounded-lg">
      <Card.Header
        className="text-light"
        as="h5"
        style={{ background: "#135C13" }}
      >
        Contact Us
      </Card.Header>
      <Card.Body>
        <Row className="g-3">
          <div className="col-12 col-lg-1">
            <p>
              <strong>Email:</strong>
            </p>
          </div>
          <div className="col-12 col-lg-11">
            <p>
              <a
                className="text-primary"
                href="mailto:wesellhelp.contact@gmail.com"
              >
                wesellhelp.contact@gmail.com
              </a>
            </p>
          </div>

          <div className="col-12 col-lg-1">
            <p>
              <strong>Address:</strong>
            </p>
          </div>
          <div className="col-12 col-lg-11">
            <p>
              2-A/3, KUNDAN MANSION, ASAF ALI RD, TURKMAN GATE, NEW DELHI,
              DELHI, 110002 (Near RAJIV CHOWK METRO STATION)
            </p>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContactUs;
