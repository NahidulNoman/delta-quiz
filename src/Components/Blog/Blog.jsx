import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <div className='shadow-lg p-4 rounded-4 bg-white'>
                <h3 className='fw-bold'>What is the purpose of react router ?</h3>
                <p className='fw-semibold opacity-75'>
                React Router is a state container for the current location , or URL and also React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.We use router because We simply couple a component with a specific route, which makes our root component (normally called App) clear, maintainable and readable. Without router, either the root component or state would be messy and hard to maintain.
                </p>
            </div>
            <div className='mt-5 shadow-lg p-4 rounded-4 bg-white'>
                <h3 className='fw-bold'>How does context api works ?</h3>
                <p className='fw-semibold opacity-75'>
                Context provides a way to pass data through the component tree without having to pass props down manually at every level. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                </p>
            </div>
            <div className='mt-5 mb-5 shadow-lg p-4 rounded-4 bg-white'>
                <h3 className='fw-bold'>What is useRef ?</h3>
                <p className='fw-semibold opacity-75'>
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.useRef() only returns one item. It returns an Object called current.When we initialize useRef we set the initial value: useRef(0).
                </p>
            </div>
        </div>
    );
};

export default Blog;