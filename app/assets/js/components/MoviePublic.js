// assets/js/components/publicResources.js

import React, {Component} from 'react';
import { Card, CardText, CardBody,CardTitle, Container,Row, Col, Badge  } from 'reactstrap';
import MovieNew from "./MovieNew";



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
                                <CardBody>
                                    <CardTitle>{data.title}</CardTitle>
                                    <CardText>{data.year_produced}</CardText>
                                    <span> Genre:  <Badge color="info" pill>{data.genre_name}</Badge></span>

                                </CardBody>
                            </Card>
                        </Col>
                    )}
                </Row>
                }

                <div className={'row text-center'} style={{marginTop:40}}>
                    <button
                        className={"btn btn-success text-center"}
                        onClick={() => {this.MovieNew()}}
                    >
                        Add New Movie
                    </button>
                </div>

            </Container>
        )
    }
}
export default MoviePublic;