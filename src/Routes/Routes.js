import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/ContactForm/Contact";
import Home from "../Components/Home/Home/Home";
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
            }
        ]
    }
])