import { Container, Row, Tab ,Col, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import av from "../assets/images/av.png";
import cb from "../assets/images/crazy_bus.png";
import vt from "../assets/images/vital_track.png";
export const Project = () => {
    const projects1 = [
        {
            title:"Crazy Bus",
            description: "Crazy Bus is a full-stack project, redefines the LNMIIT travel experience. Tailored for students, it streamlines bus selection, seat reservation, and secure payments. It has user-centric design, emphasizing how Crazy Bus enhances convenience for LNMIIT students. From the intuitive interface to robust functionality, the project showcases a seamless and reliable bus booking platform, addressing the unique needs of the LNMIIT community.",
            imgUrl: cb
        },
        {
            title:"Algorithm Visualiser",
            description: "The Algorithm Visualizer project is currently in progress, with the goal of providing an interactive visualization of common sorting algorithms. This tool will allow users to observe the step-by-step execution of sorting algorithms with adjustable input sizes and variable numbers. By enhancing understanding through visual representation, the project aims to make learning algorithms engaging and accessible, fostering a deeper comprehension of sorting processes.",
            imgUrl: av
        }
    ];
    const projects2 = [
        {
            title:"Vital-Track",
            description: "lorem ipsum",
            imgUrl: vt
        }
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>paragraph to be added</p>
                    <Tab.Container id="projetcs-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Web Develpement</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">IOT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Other</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                projects1.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                            
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            
                            <Row>
                                {
                                projects2.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                            
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            kuchh to add karenge
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}