import * as React from 'react'
import BlogPage from './BlogPage'
import Home from './Home'
import Hero from './Hero'
import About from './About'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const App = () => {
    return (
        <>
            
            <Hero />
            <About />
        </>
    );
}

export default App;