import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import FeaturedCourse from '../../shared/FeaturedCourse/FeaturedCourse';

const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div>
            <h2>This is Courses cat page {allCourses.length}</h2>
            <Container>
                <Row>

                    {
                        allCourses.map(course => <Col lg='6'><FeaturedCourse key={course._id} course={course}></FeaturedCourse></Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Courses;