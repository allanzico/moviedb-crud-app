const movieUrl = "/api/movies";
const genreUrl ="/api/genre";

const getState = ({ getStore,  setStore }) => {

	return {

		store: {
			movies: [],
			genres:[],
		},
		actions: {

			//Fetch Movies
			loadMovies(){
				fetch(movieUrl).then(res =>res.json())
					.then(data => {
						setStore({
							movies: data
						});
					})
			},

			//Add new movies
			addMovies(title, produced, genre){
				console.log(genre);
				fetch(movieUrl + "/add", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						title: title,
						year_produced: produced,
						genre: genre
					})
				}).then(() => {
					fetch(movieUrl).then(res =>res.json())
						.then(data => {
							setStore({
								movies: data
							});
						})
				});
			},

			//Edit movie
			editMovies(id,title, produced, genre){
				fetch(movieUrl + "/update/" + id, {
					method: "PUT",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						title: title,
						year_produced: produced,
						genre: genre
					})
				}).then(() => {
					fetch(movieUrl).then(res =>res.json())
						.then(data => {
							setStore({
								movies: data
							});
						})
				});
			},

			//Delete Movie
			deleteMovies(id){
				fetch(movieUrl + "/delete/" + id, {
					method: "DELETE"
				}).then(() => {
					fetch(movieUrl).then(res =>res.json())
						.then(data => {
							setStore({
								movies: data
							});
						})
				});
			},

			//Fetch genres

			loadGenres(){
				fetch(genreUrl).then(res =>res.json())
					.then(genreData => {
						setStore({
							genres: genreData
						})
					})
			}

			}

		};
};

export default getState;
