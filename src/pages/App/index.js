import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chat from '@P/Chat';
import Home from '@P/Home';

function App({baseUrl}) {
    return (
        <Router basename={baseUrl}>
            <div className={`App`}>
                <Route path="/" exact component={Chat} />
                <Route path="/reactchild" component={Home} />
            </div>
        </Router>
    )
}

export default App;