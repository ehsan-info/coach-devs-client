import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaDownload, FaEye, FaStar } from 'react-icons/fa';
import { render } from 'react-dom';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'react-bootstrap';

const FeaturedCourse = ({ course }) => {
    console.log(course);
    const { _id, category_id, course_name, total_view, image_url, rating, trainer_info, details, price } = course;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div>

            {
                <Card className="mt-3" ref={componentRef}>
                    <Card.Header className='d-flex justify-content-end'>
                        <div></div>
                        <div>

                            <Button className='bg-light btn-outline-secondary' onClick={handlePrint}><FaDownload className='text-dark'></FaDownload></Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Img style={{ height: '150px' }} variant="top" src={image_url} />
                        <Card.Title style={{ height: '100px' }}>{course_name}</Card.Title>
                        <Card.Text>
                            <small><span>Instructor: </span>{trainer_info?.name}</small>
                        </Card.Text>
                        <Card.Text>
                            <small><span>Position: </span>{trainer_info?.position}</small>
                        </Card.Text>
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