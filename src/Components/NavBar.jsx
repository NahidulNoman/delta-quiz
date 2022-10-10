import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand" href="/">DeltaQuiz</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/">Topics</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/">Statistics</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/">Blog</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default NavBar;