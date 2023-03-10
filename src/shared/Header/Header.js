import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import { useRef } from 'react';
import './Header.css';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-sm-center d-sm-block">
                        {
                            user?.uid ?
                                <Navbar.Text>
                                    Signed in as: <span>{user?.email}</span>
                                </Navbar.Text>
                                :
                                <FaUser></FaUser>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <Link to='/'><Image style={{ height: '40px' }} src={logo}></Image></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'><Button variant="light">Home</Button></Link></Nav.Link>
                            <Nav.Link><Link to='/courses'><Button variant="light">Courses</Button></Link></Nav.Link>
                            <Nav.Link><Link to='/blog'><Button variant="light">Blog</Button></Link></Nav.Link>
                            <Nav.Link><Link to='/faq'><Button variant="light">FAQ</Button></Link></Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <>
                                        <Button variant="light" className='' ref={target} onClick={() => setShow(!show)}>
                                            {
                                                user?.photoURL &&
                                                <Image roundedCircle style={{ height: '40px' }} src={user?.photoURL} />
                                            }
                                        </Button>
                                        <Overlay target={target.current} show={show} placement="right">
                                            {(props) => (
                                                <Tooltip id="overlay-example" {...props}>
                                                    {user?.displayName}
                                                </Tooltip>
                                            )}
                                        </Overlay>
                                        <Button onClick={handleLogOut} className='ms-2' variant="outline-dark">Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Button className='ms-2' variant="outline-dark"><Link to='/login'>Login</Link></Button>
                                        <Button className='ms-2' variant="outline-dark"><Link to='/registration'>Register</Link></Button>
                                    </>
                            }
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;