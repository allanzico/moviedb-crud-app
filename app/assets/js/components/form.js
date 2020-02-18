
import React, {Component} from 'react';



class Form extends Component {
    state = {
        title: this.props.title || '',
        year_produced: this.props.year_produced || '' ,
        genre: this.props.genre  || ''
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleProducedChange= this.handleProducedChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);

    }

    //submit form
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    //handle title change
    handleTitleChange(e){
        this.setState({
            title:e.target.value
        })
    }

    //handle Produced change
    handleProducedChange(e){
        this.setState({
            year_produced:e.target.value
        })
    }

    //handle Genre change
    handleGenreChange(e){
        this.setState({
            genre:e.target.value
        })
    }


    render(){
        return (

            <form name="movie" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="movie">
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="movie-title">Title</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="movie-title"
                                   required="required"
                                   value={this.state.title}
                                   onChange={this.handleTitleChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="movie-produced">Produced</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="movie-produced"
                                   value={this.state.year_produced }
                                   onChange={this.handleProducedChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="movie-produced">Genre</label>
                        <div className="col-sm-10">
                            <input type="number"
                                   id="movie-genre"
                                   required="required"
                                   value={this.state.genre }
                                   onChange={this.handleGenreChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button type="submit"
                                    id="movie-submit"
                                    className="btn btn-primary">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        )
    }

}

export default Form;
