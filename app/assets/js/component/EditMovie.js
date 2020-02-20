import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import  {Context} from "../store/appContext";
import PropTypes from "prop-types";


export const EditMovie = props =>{
    const {store, actions} = useContext(Context);
    const genres = store.genres;
    let id = props.match.params.id;
    const movie = store.movies[props.match.params.id];
    const [title, setTitle] = useState(movie.title);
    const [produced, setProduced] = useState(movie.year_produced);
    const [genre, setGenre] = useState(movie.genre);

    console.log(movie);

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
                    {/*<div className="form-group">*/}
                    {/*    <label>Genre</label>*/}
                    {/*    <input*/}
                    {/*        type="number"*/}
                    {/*        className="form-control"*/}
                    {/*        placeholder="Movie Genre"*/}
                    {/*        defaultValue={genre}*/}
                    {/*        onChange={e => setGenre(e.target.value)}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label>Select Genre</label>
                        { console.log(genre) }
                        <select value={genre} onChange={e => setGenre(e.target.value)}>
                            {
                                genres.map(genre=>( <option value={genre.id} key={genre.id}>{genre.name}</option>)
                                )
                            }
                        </select>
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