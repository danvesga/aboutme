import React from "react";
import "./App.css";
import { NavBar } from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
"https://icon2.cleanpng.com/20180322/kfw/avd5lehyl.webp"                        />
                    </div>
                    <li>
                        <a href="#courses">My</a>
                    </li>
                    <li>
                        <a href="#tutorials">Name</a>
                    </li>
                    <li>
                        <a href="#jobs">Is</a>
                    </li>
                    <li>
                        <a href="#student">Danny</a>
                    </li>
                </ul>

                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            About
                        </h1>
                        <p class="text-small">
                        As a combined Computer Science and Design student, 
                        I am motivated to create intuitive and memorable interfaces. 
                        I am an imaginative and detail-oriented worker, with a passion 
                        for the visual arts and storytelling. Through design and development, 
                        I want to influence a world where all our added technology and 
                        shortcuts bolster the active and social parts of our lives.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Skillz
                        </h1>
                        <p class="text-small">
                            JavaScript is the world most
                            popular lightweight, interpreted
                            compiled programming language.
                            It is also known as scripting
                            language for web pages. It is
                            well-known for the development
                            of web page many non-browser
                            environments also use it.
                            JavaScript can be used for
                            Client-side developments as well
                            as Server-side developments.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Please Pick Me
                        </h1>
                        <p class="text-small">
                            When compared with C++, Java
                            codes are generally more
                            maintainable because Java does
                            not allow many things which may
                            lead to bad/inefficient
                            programming if used incorrectly.
                            For example, non-primitives are
                            always references in Java. So we
                            cannot pass large objects (like
                            we can do in C++) to functions,
                            we always pass references in
                            Java. One more example, since
                            there are no pointers, bad
                            memory access is also not
                            possible. When compared with
                            Python, Java kind of fits
                            between C++ and Python. The
                            programs are written in Java
                            typically run faster than
                            corresponding Python programs
                            and slower than C++. Like C++,
                            Java does static type checking,
                            but Python does not.
                        </p>
                    </div>
                </div>
            </section>
            
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
}

function welcome() {
  return (
    <h1>
      Hello and Welcome.
    </h1>
  )
}

function App2() {
    return (
        <div className="App2">
            <NavBar/>
        </div>
    )
}



export default App2;