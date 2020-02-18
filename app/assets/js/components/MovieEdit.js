import React, {Component} from 'react';
import Form from "./form";





class MovieEdit extends  Component{

    state = {
        movie: {}
    };
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    //Submit form
    handleSubmit(data) {
        this.updateMovie(this.state.movie.id, data);
        console.log(data);

    }

    componentDidMount() {
        fetch(`/api/movies/${this.props.match.params.id}`)
            .then((data) => {
                console.log(data);
                this.setState({ movie: data })
            }).catch(console.log)
    }

    //Persist data
    updateMovie(data){
        fetch(`/api/movie/update/${this.state.movie.id}` ,{
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(r => {
            return r
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}
                      movie-title = {this.state.movie.title}
                 year_produced = {this.state.movie.year_produced}
                  genre={this.state.movie.genre}
                />
            </div>
        )
    }
}

export default MovieEdit;