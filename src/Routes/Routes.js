import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/ContactForm/Contact";
import Home from "../Components/Home/Home/Home";
import Details from "../Components/Home/Projects/ProjectDetails/Details";
import Main from "../Components/Layouts/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,

            }
        ]
    }
])