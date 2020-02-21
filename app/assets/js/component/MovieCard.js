import  React, {useState, useEffect,useContext} from "react";
import {Badge, Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";
import  PropTypes from "prop-types";
import Button from "reactstrap/es/Button";


export  const MovieCard = props =>{
const {store, actions} = useContext(Context);
    const  movies = store.movies;

    function sortByProduced(){
        return Object.values(movies).sort((a,b) => a.year_produced - b.year_produced);
    }
    console.log(sortByProduced());

    return(
        <div>
            {store.movies &&
            <Row style={{marginTop:40}}>
                {Object.values(store.movies).map((data, index) =>
                    <Col xs="4" key={index}>
                        <Card className="movies-card">
                            <CardBody >
                                <CardTitle>{data.title}</CardTitle>
                                <CardText>{data.year_produced}</CardText>
                                <CardText> Genre:  <Badge color="info" pill>{data.genre_name}</Badge></CardText>
                                <CardText>
                                    <Link to={"/edit/" +data.id } className="btn btn-success btn-sm">Edit</Link>
                                    <Button className="btn btn-danger btn-sm"
                                            onClick={() => {actions.deleteMovies(data.id)}}>Delete</Button>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                )}
            </Row>
            }
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                    sortByProduced()
                }}
            >
                SORT ASC
            </button>
        </div>
    )
};

//Define the data-types for the component's properties

MovieCard.propTypes ={
    match: PropTypes.object,
    history: PropTypes.object,
    onDelete: PropTypes.func
};

//Define default values for the component's properties

MovieCard.defaultProps = {
    onDelete: null
}

