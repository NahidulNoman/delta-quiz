import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg bg-light p-3 shadow-lg">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">DeltaQuiz</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link fw-semibold" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link fw-semibold" to="/topics">Topics</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link fw-semibold" to="/statistics">Statistics</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link fw-semibold" to="/blog">Blog</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
       
    );
};

export default NavBar;