const mainWatchlist = document.getElementById("watchlist-main")
const deleteBtn = document.getElementById("remove-btn")
let data = JSON.parse(localStorage.getItem("movieDataObj"))

function render() {
    for (let i = 0; i < data.length; i++) {
        console.log(data)
           mainWatchlist.innerHTML += `
                            <div class="movie-container">
                                <div class="poster-container">
                                    <img class="film-img" src="${data[i].Poster}" />
                                </div>
                                <div class="movie-details-container">
                                    <div class="title-rating">
                                        <h2>${data[i].Title}</h2>
                                        <p>⭐${data[i].imdbRating}</p>
                                    </div>
                                    <div class="time-genre">
                                        <p class="time">${data[i].Runtime}</p>
                                        <p class="time">${data[i].Genre}</p>
                                        <div class="watchlist-btn">
                                            <button
                                                id="main-btn" 
                                                class="main-btn" 
                                                data-imdb-id="${data[i].imdbID}">+
                                            </button>
                                            <a>Watchlist</a>
                                        </div>
                                    </div>
                                    <p>${data[i].Plot}</p>
                                </div>
                            </div>
                            <hr/>
                        
           `   
    }
}