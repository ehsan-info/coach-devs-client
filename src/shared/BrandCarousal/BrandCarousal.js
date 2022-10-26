import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/carousal/1.jpg';
import image2 from '../../assets/carousal/2.jpg';
import image3 from '../../assets/carousal/3.jpg';
import Button from 'react-bootstrap/Button';
const BrandCarousal = () => {
    return (
        <div>
            <Carousel fade style={{ height: '500px' }} >
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Online Course</h2>
                        <p>Improve Your Skills</p>
                        <Button variant="secondary" size="sm">
                            Learn More
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>The Best Solution</h2>
                        <p>To Enhance Your Knowledge In IT Sector</p>
                        <Button variant="secondary" size="sm">
                            Learn More
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Onsite Courses</h2>
                        <p>
                            Meet new friends and study with experts
                        </p>
                        <Button variant="secondary" size="sm">
                            Learn More
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousal;