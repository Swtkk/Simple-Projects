const searchBtn = document.querySelector(".searchBtn");
const movieTitle = document.getElementById("movieTitle");
const movieResult = document.querySelector(".movie");

const movie = () => {
	let video = movieTitle.value;
	let title = video.replaceAll(" ", "+");

	if (video.length <= 0) {
		movieResult.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`;
	} else {
		fetch(`https://www.omdbapi.com/?t=${title})&apikey=b914f9c4`)
			.then((res) => res.json())
			.then((data) => {
				if (data.Response == "True") {
					movieResult.innerHTML = `<div class="info"><div class="picture"><img src="${
						data.Poster
					}"></div>
				<div class="details"> 
				<h1 class="title">${data.Title}</h1> 
				<h2 class="director">Director: ${data.Director}</h2> 
				<h2 class="rate">Rate: ${data.imdbRating}/10</h2> 
				<div class="genre">
				<div>${data.Genre.split(",").join("</div><div>")}</div>
				</div>
				</div>
				</div>
				<div class="plot">
				<h3>Plot:</h3><p class="plotText">${data.Plot}</p>
				</div>
				<div class="awards">
				<h3>Awards:</h3><p class="awardsText">${data.Awards}</p>
				</div>
				`;
				}
			});
	}
};


searchBtn.addEventListener("click", movie);
movieTitle.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		movie();
	}
});
