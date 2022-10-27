import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://coach-devs-server.vercel.app/courses-cat')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className=''>
            <div className='mt-4'>
                {
                    categories.map(category => <p key={category.id} category={category}><Link to={`/courses/${category.id}`}><Button variant='light'>{category.name}</Button></Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;