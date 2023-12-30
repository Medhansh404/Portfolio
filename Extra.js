import { ListGroup, Container,Col ,Row } from "react-bootstrap";

export const Extra = () =>{
    return (
        <section className="extra" id="extra">
            <Container>
                <Row>
                    <Col>
                    <div className="extra-list">
                        <h2>Extra-Curricular</h2>
                        <p>this is a paragraph to be added</p>
                            <ListGroup className="list">
                                <ListGroup.Item>Senior Executive at The Training and Placement Cell, LNMIIT</ListGroup.Item>
                                <ListGroup.Item>Associate Coordinator at The Counselling and Guidance Cell, LNMIIT</ListGroup.Item>
                                <ListGroup.Item>Member of Capriccio: THe Music CLub ,LNMIIT</ListGroup.Item>

                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      );
}