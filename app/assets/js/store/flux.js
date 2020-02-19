const url = "/api/movies";

const getState = ({ getStore,  setStore }) => {

	return {

		store: {
			movies: [],
			genres:  []
		},
		actions: {

			//Fetch Movies
			loadMovies(){
				fetch(url).then(res =>res.json())
					.then(data => {
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
							setStore({
								movies: data
							});
						})
				});
			},

			//Edit movie
			editMovies(id,title, produced, genre){
				fetch(url + "/update/" + id, {
					method: "PUT",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						title: title,
						year_produced: produced,
						genre: genre
					})
				}).then(() => {
					fetch(url).then(res =>res.json())
						.then(data => {
							setStore({
								movies: data
							});
						})
				});
			},

			//Delete Movie
			deleteMovies(id){
				fetch(url + "/delete/" + id, {
					method: "DELETE"
				}).then(() => {
					fetch(url).then(res =>res.json())
						.then(data => {
							setStore({
								movies: data
							});
						})
				});
			},

			//Fetch genres
				getGenres(){
					fetch('/api/genres').then(res =>res.json())
						.then(genreData => {
							console.log(genreData)
							setStore({
								genres: genreData
							});
						})
				}
			}

		};
};

export default getState;
