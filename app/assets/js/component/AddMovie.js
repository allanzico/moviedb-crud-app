import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import  {Context} from "../store/appContext";

export  const AddMovie =() => {
    const {store, actions} = useContext(Context);
    const [title, setTitle] = useState("");
    const [produced, setProduced] = useState("");
    const [genre, setGenre] = useState("");
    const data = store.genres;
    console.log(data)

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
                        <label>Genre</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="genre"
                            onChange={e => setGenre(e.target.value)}
                        />
                    </div>

                   {/* <div className="form-group">*/}
                   {/*     <label>Select Genre</label>*/}
                   {/*     <select value={genre} onChange={e => setGenre(e.target.value)}>*/}
                   {/*         {*/}
                   {/*             data.map((genre)=> <option value={genre.id} key={genre.id}>{genre.name}</option>*/}
                   {/*             )*/}
                   {/*         }*/}
                   {/*</select>*/}
                   {/* </div>*/}

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