import { Container, Row ,Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leetcode from "../assets/images/leetcode.png";
import coding from "../assets/images/coding.png";
import jeemain from "../assets/images/jeemain.png";
import jeeadv from "../assets/images/jeeadv.jpeg";
export const Achievement = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const data = [
        { image: leetcode, title: "Leetcode" ,description :"achieved highest rating of 1651"},
        { image: coding, title: "Coding Platforms", description :"solved 650+ question across various coding platforms"},
        { image: jeemain, title: "Jee Mains" , description :"obtained 97.4 percentile in JEE MAINS 2021"},
        { image: jeeadv, title: "Jee Advanced", description :"obtained 16819 rank in JEE Advanced 2021" },
        
      ];
    return (
        <section className="achievement" id="achievement">
            <Container>
                <Row>
                    <Col>
                        <div className="achievement-bx">
                            <h2>Achievements</h2>
                            <p>this is a paragraph to be added</p>
                            <Carousel responsive={responsive} infinite={true} className="achievement-slider">
                                
                                {data.map((achievement, index) => (
                                    <div key={index} className="ach-img">
                                        <img src={achievement.image} alt={achievement.title} />
                                        <h5>{achievement.title}</h5>
                                        <div className= "ach-des">
                                            <span>{achievement.description}</span>
                                        </div>
                                    </div>
                                ))}
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )      
    
}