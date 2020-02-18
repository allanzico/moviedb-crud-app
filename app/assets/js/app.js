/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
import React, {Component} from "react";
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/Home";
import MovieNew from "./components/MovieNew";
import MovieEdit from "./components/MovieEdit";



// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Home/>
                    <Route path="/new-movie" component={MovieNew}/>
                    <Route path="/edit-movie/:id" component={MovieEdit}/>
                </div>
            </BrowserRouter>


        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
