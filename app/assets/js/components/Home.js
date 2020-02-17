
import React, { Component } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviePublic from "./MoviePublic";



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