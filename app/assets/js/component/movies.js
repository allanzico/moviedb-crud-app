import  React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Badge, Card, CardBody, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {MovieCard} from "./MovieCard";

const Movies = () =>{
    const{store, actions} = useContext(Context);

    return(
        <Container style={{marginTop:10}}>

            <div className={'row text-center'} style={{marginTop:40}}>
                <Link to="/add" className="btn btn-dark">Add New Movies</Link>

            </div>
            <MovieCard/>
        </Container>


    )
};

export default  Movies;