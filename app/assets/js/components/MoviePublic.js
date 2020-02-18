// assets/js/components/publicResources.js

import React, {Component} from 'react';
import { Card, CardText, CardBody,CardTitle, Container,Row, Col, Badge, Button  } from 'reactstrap';
import MovieNew from "./MovieNew";
import {Link, NavLink, NavLinkLink} from "react-router-dom";
import { Router, browserHistory, Route, IndexRoute, withRouter } from "react-router";
import NavBar from "./NavBar";


class MoviePublic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: null,
        };
        this.fetchMovies = this.fetchMovies.bind(this);

    }


    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies() {

        fetch(`/api/movies`).then(Response => Response.json())
            .then((data) => {
                this.setState({ movies: data })
            }).catch(console.log)
    }


    render() {
        return (
            <Container style={{marginTop:50}}>
                {this.state.movies &&
                <Row style={{marginTop:40}}>
                    {this.state.movies.map(data =>
                        <Col xs="4" id={data.id} key={data.id}>
                            <Card>
                                <CardBody className="movies-card">
                                    <CardTitle>{data.title}</CardTitle>
                                    <CardText>{data.year_produced}</CardText>
                                    <CardText> Genre:  <Badge color="info" pill>{data.genre_name}</Badge></CardText>

                                    <CardText>
                                        <Link to={`/edit-movie/${data.id}` }className="btn btn-dark">Edit</Link>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    )}
                </Row>
                }

                <div className={'row text-center'} style={{marginTop:40}}>
                  <Link to="/new-movie" className="btn btn-dark">Add New Movies</Link>

                </div>

            </Container>
        )
    }
}
export default MoviePublic;