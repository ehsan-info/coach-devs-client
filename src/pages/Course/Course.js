import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Course.css';
import Card from 'react-bootstrap/Card';
const Course = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse[0]);
    const { _id, category_id, course_name, details, image_url, price, rating, total_view, trainer_info } = singleCourse[0];
    console.log(course_name);
    return (
        <div>
            <div className="bg-image shadow-2-strong intro-background mb-4">
                <div className="mask">
                    <div className="container d-flex align-items-center justify-content-center text-center mask-2">
                        <div className="text-white">
                            <h1 className="mb-3">Become An Expert !!!</h1>
                            <h5 className="mb-4">Try Out These Courses</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex gap-3'>
                <div>
                    <Image fluid src={image_url} />
                    <h2>{course_name}</h2>
                    <p>{details}</p>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={trainer_info.img} />
                        <Card.Body>
                            <Card.Title>{trainer_info.name}</Card.Title>
                            <Card.Text>
                                Position: <span>{trainer_info.position}</span>
                            </Card.Text>
                            <Card.Text>
                                Publish Date: <span>{trainer_info.publish_date}</span>
                            </Card.Text>
                            <Card.Text>
                                Price: <span>{price}</span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link><Link><Button variant="outline-secondary">Buy Now</Button></Link></Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Course;