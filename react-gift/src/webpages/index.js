import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './home';
import User from './user';
const Webpages = () => {
    return(
        <div class="container">
            <div class="text-center mt-5" id="content">
            <ul class="list-group">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path = "/user/:id" element={<li class="list-group-item"><User/></li>} />
                    </Routes>
                </Router>
                </ul>
            </div>
        </div>
    );
};
export default Webpages;