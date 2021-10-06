import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className="mb-5">
            <h5 className="text-center mt-5 primary_clr">TESTIMONIAL</h5>
            <h2 className="font_rale text-center mb-5">What Students Saying About Us</h2>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div>
                    <img src="/images/shirley.png" alt="" />
                    <div className="myCarousel">
                        <h3>Shirley Fultz</h3>
                        <h4>Designer</h4>
                        <p>
                            Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Skill Up.
                        </p>
                    </div>
                </div>

                <div>
                    <img src="/images/daniel.png" alt="" />
                    <div className="myCarousel">
                        <h3>Daniel Keystone</h3>
                        <h4>Web Developer</h4>
                        <p>
                            The simple and intuitive design makes it easy for me use. I highly
                            recommend Fetch to my peers.
                        </p>
                    </div>
                </div>

                <div>
                    <img src="/images/theo.png" alt="profile" />
                    <div className="myCarousel">
                        <h3>Theo Sorel</h3>
                        <h4>Photographer</h4>
                        <p>
                            I enjoy catching up with Fetch on my laptop, or on my phone when
                            I'm on the go!
                        </p>
                    </div>
                </div>
            </Carousel>

        </div>
    )
}

export default Testimonial;