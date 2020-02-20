import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import  {Context} from "../store/appContext";

export  const AddMovie =() => {
    const {store, actions} = useContext(Context);
    const genres = store.genres;
    const [title, setTitle] = useState("");
    const [produced, setProduced] = useState("");
    const [genre, setGenre] = useState(genres[0].id);


    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Add New Movie</h1>
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="movie title"
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Production year</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="When was it Produced?"
                            onChange={e => setProduced(e.target.value)}
                        />
                    </div>

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
                                actions.addMovies(title, produced, genre);
                            }}>
                            ADD
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}