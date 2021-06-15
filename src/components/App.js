import * as React from 'react'
import BlogPage from './BlogPage'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/blog">
                        <BlogPage />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>      
                </Switch>￼


            </div>
        </Router>
    );
}

export default App;