import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import {AddMovie} from "./component/AddMovie";
import Movies from "./component/movies";
import {EditMovie} from "./component/EditMovie";


//create your first component
export const Layout = () => {
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>

					<Navbar />
					<Switch>
						<Route exact path="/" component={Movies} />
						<Route path="/add" component={AddMovie} />
						<Route path="/edit/:id" component={EditMovie} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>

			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
