import * as React from 'react'
import BlogPage from './BlogPage'
import Home from './Home'

import Hero from './Hero'
import NavBar from './NavBar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const App = () => {
    return (
        <>
            <Hero />
            <NavBar />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;