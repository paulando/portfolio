import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Styles from './styles/css/main.css';
import Specter from 'spectre.css/dist/spectre.min.css';

// Views
// import Menu      from "./views/Menu";
import Home      from "./components/Home";
import About     from "./views/About";
import Portfolio from "./views/Portfolio";
import Blog      from "./components/Blog";
import BlogItem  from "./views/BlogItem";
import Contact   from "./views/Contact";
import Error404  from "./views/404";

const App = (props) => (
    <Router>
        <div>
            {/*<Menu />*/}

            {/*<hr/> */}

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route exact path="/blog" component={Blog}/>
                <Route path="/blog/:id" component={BlogItem}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error404}/>
            </Switch>
        </div>
    </Router>
);

export default App;
