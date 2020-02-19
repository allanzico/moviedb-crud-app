const getState = ({ getStore, getActions, setStore }) => {
	const url = "/api/movies";
	return {

		store: {
			movies: []
		},
		actions: {

			//Fetch Movies
			loadMovies(){
				fetch(url).then(res =>res.json())
					.then(data => {
						console.log(data);
						setStore({
							movies: data
						});
					})
			},

			//Add new movies
			addMovies(title, produced, genre){
				fetch(url + "/add", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						title: title,
						year_produced: produced,
						genre: genre
					})
				}).then(() => {
					fetch(url).then(res =>res.json())
						.then(data => {
							console.log(data);
							setStore({
								movies: data
							});
						})
				});
			}
			}

		};
};

export default getState;
