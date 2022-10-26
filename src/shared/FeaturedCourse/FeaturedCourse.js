import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/carousal/1.jpg';
import image2 from '../../assets/carousal/2.jpg';
import image3 from '../../assets/carousal/3.jpg';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye, FaStar } from 'react-icons/fa';
const FeaturedCourse = ({ course }) => {
    console.log(course);
    const { _id, category_id, course_name, thumbnail_url, total_view, image_url, rating, trainer_info, details, price } = course;
    return (
        <div>
            {
                <Card className="mt-3">
                    <Card.Body>
                        <Card.Img style={{ height: '150px' }} variant="top" src={image_url} />
                        <Card.Title style={{ height: '100px' }}>{course_name}</Card.Title>
                        <Card.Text>
                            {
                                details.length > 200 ?
                                    <>
                                        {details.slice(0, 150) + '...'}<Link to={`/course/${_id}`}>See Details</Link>
                                    </>
                                    :
                                    <></>
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <div className='d-flex'>
                            <div>
                                <FaStar className='text-warning me-2'></FaStar>
                                <span>{rating?.number}</span>
                            </div>
                            <div>
                                <FaEye className='me-2 ms-2'></FaEye>
                                <span>{total_view}</span>
                            </div>
                        </div>
                        <div>
                            <p>{price}</p>
                        </div>
                    </Card.Footer>
                </Card>

            }
        </div>
    );
};

export default FeaturedCourse;