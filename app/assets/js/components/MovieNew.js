import React, {Component} from 'react';
import Form from "./form";




class MovieNew extends  Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    //Submit form
    handleSubmit(data) {
        this.addNewMovie(data)
    }

    //Add new movie from form
     addNewMovie(data) {

         fetch('/api/add_movie', {
             method: 'POST',
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
                <Form onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default MovieNew;