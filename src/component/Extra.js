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
                                <ListGroup.Item>TPC</ListGroup.Item>
                                <ListGroup.Item>Capriccio</ListGroup.Item>
                                <ListGroup.Item>C-cell</ListGroup.Item>

                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      );
}