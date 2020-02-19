import  React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Badge, Card, CardBody, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

const Movies = () =>{
    const{store, actions} = useContext(Context);
    return(
        <Container style={{marginTop:50}}>
            {store.movies.map &&
            <Row style={{marginTop:40}}>
                {store.movies.map((data, index) =>
                    <Col xs="4" key={index}>
                        <Card>
                            <CardBody className="movies-card">
                                <CardTitle>{data.title}</CardTitle>
                                <CardText>{data.year_produced}</CardText>
                                <CardText> Genre:  <Badge color="info" pill>{data.genre_name}</Badge></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                )}
            </Row>
            }
            <div className={'row text-center'} style={{marginTop:40}}>
                <Link to="/add" className="btn btn-dark">Add New Movies</Link>
            </div>

        </Container>
    )
};

export default  Movies;