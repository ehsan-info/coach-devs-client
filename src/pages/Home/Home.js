import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandCarousal from '../../shared/BrandCarousal/BrandCarousal';
import FeaturedCourse from '../../shared/FeaturedCourse/FeaturedCourse';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BrandCarousal></BrandCarousal>
            <h2 className='text-center mt-3' style={{ color: '#72D5CD' }}>Top Courses</h2>
            <Container>
                <Row>

                    {
                        allCourses.map(course =>
                            course.category_id === '03' &&
                            <Col lg='4'><FeaturedCourse key={course._id} course={course}></FeaturedCourse></Col>)
                    }

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Home;