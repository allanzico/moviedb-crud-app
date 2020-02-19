
import React, { Component } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import NavBar from './/NavBar';
import MoviePublic from "./MoviePublic";
import MovieNew from "./MovieNew";



class Home extends  Component {



    render() {
        return (
            <div>
                <NavBar>
                    <Switch>
                        <Route path={"/"} component={MoviePublic} />
                    </Switch>
                </NavBar>
                <MoviePublic></MoviePublic>
            </div>
        )
    }
}

export default Home;