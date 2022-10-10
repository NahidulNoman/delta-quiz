import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Components/Home/Home";
import QuizDetails from "../Components/QuizDetails/QuizDetails";
import Statistics from "../Components/Statistics/Statistics";
import Topics from "../Components/Topics/Topics";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/topics',
                loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element : <Topics></Topics>
            },
            {
                path : '/quiz/:id',
                loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element : <QuizDetails></QuizDetails>
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