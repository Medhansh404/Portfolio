import { Container, Row, Col } from "react-bootstrap";

import linkedin from "../assets/images/linkedin.png";
import git from "../assets/images/github.png";
import cv from "../assets/images/cv.png";
import leetcode from "../assets/images/leetcode.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://drive.google.com/drive/folders/1ORlHiX1kqc2oDRmnNGjPzG7SN6nxxQBR?usp=sharing" target="_blank"><img src={cv} alt="Icon" /></a>
              <a href="https://github.com/diyaghodasara" target="_blank"><img src={git} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/diya-g-536692223/" target="_blank"><img src={linkedin} alt="Icon" /></a>
              <a href="https://leetcode.com/diya_ghodasara/" target="_blank"><img src={leetcode} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}