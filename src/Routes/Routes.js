import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import Course from "../pages/Course/Course";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/course')
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <div className='font-mono my-3'>
            <p className='text-6xl font-bold my-3 text-orange-600'>404</p>
            <p className='text-7xl font-bold my-3 text-zinc-500'>This route is not found</p>
            <p className=' text-zinc-500'>Go to</p>
        </div>
    }
])