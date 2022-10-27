import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const singleItem = useLoaderData();
    const { _id, category_id, course_name, details, image_url, price, rating, total_view, trainer_info } = singleItem[0];
    return (
        <div>
            <h2 className='my-4'>Checkout</h2>
            <div className='d-flex gap-3'>
                <div>
                    <Image fluid src={image_url} />
                    <h2>{course_name}</h2>
                    <p>Trainer Name: {trainer_info?.name}</p>
                    <p>Position: <span>{trainer_info?.position}</span></p>
                    <p>Publish Date: <span>{trainer_info?.publish_date}</span></p>
                    <p>{details}</p>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={user?.photoURL} />
                        <Card.Body>
                            <Card.Title>{user?.displayName}</Card.Title>
                            <Card.Text>
                                Email: <span>{user?.email}</span>
                            </Card.Text>
                            <Card.Text>
                                Publish Date: <span>{trainer_info.publish_date}</span>
                            </Card.Text>
                            <Card.Text>
                                Price: <span>{price}</span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link><Link to=''><Button variant="outline-secondary">Check Out</Button></Link></Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;