import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import  {Context} from "../store/appContext";
import PropTypes from "prop-types";


export const EditMovie = props =>{
    const {store, actions} = useContext(Context);
    let id = props.match.params.id;
    let data = store.movies[props.match.params];
    const [title, setTitle] = useState("");
    const [produced, setProduced] = useState("");
    const [genre, setGenre] = useState("");

    console.log(store.movies);

    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Edit Movie</h1>
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="movie title"
                            defaultValue={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Production year</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="When was it Produced?"
                            defaultValue={produced}
                            onChange={e => setProduced(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Movie Genre"
                            defaultValue={genre}
                            onChange={e => setGenre(e.target.value)}
                        />
                    </div>
                    <Link to={"/"}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                actions.editMovies(id,title, produced, genre);
                            }}>
                            UPDATE
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

EditMovie.propTypes ={
    match: PropTypes.object
}