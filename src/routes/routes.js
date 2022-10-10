import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Components/Home/Home";
import Quizzes from "../Components/Quizzes/Quizzes";
import Statistics from "../Components/Statistics/Statistics";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element : <Home></Home>
            },
            {
                path : '/home',
                loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element : <Home></Home>
            },
            {
                path : '/quizzes:id',
                loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element : <Quizzes></Quizzes>
            },
            {
                path : '/statistics',
                element : <Statistics></Statistics>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            }
        ]
    }
])