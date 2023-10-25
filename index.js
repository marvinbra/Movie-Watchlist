const searchEl = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const main = document.getElementById("main")
const mainWatchlist = document.getElementById("watchlist-main")
let moviesArr = []
let movieData = []

searchBtn.addEventListener("click", () => {
        fetch(`https://www.omdbapi.com/?s=${searchEl.value}&apikey=d4da1b9a`)
        .then(res => res.json())
        .then(data => {
            for(let i=0; i < 5; i++) {
                let filmsInfo = data.Search[i].Title
                main.innerHTML = ``
                moviesArr.push(filmsInfo)
                // console.log(moviesArr)
            }
            
            for (let i = 0; i < moviesArr.length; i++) {
                fetch(`https://www.omdbapi.com/?t=${moviesArr[i]}&apikey=d4da1b9a`)
                    .then(res => res.json())
                    .then(data => {
                        movieData.push(data)
                         main.innerHTML += `
                            <div class="movie-container">
                                <div class="poster-container">
                                    <img class="film-img" src="${data.Poster}" />
                                </div>
                                <div class="movie-details-container">
                                    <div class="title-rating">
                                        <h2>${data.Title}</h2>
                                        <p>⭐${data.imdbRating}</p>
                                    </div>
                                    <div class="time-genre">
                                        <p class="time">${data.Runtime}</p>
                                        <p class="time">${data.Genre}</p>
                                        <div class="watchlist-btn">
                                            <button
                                                id="main-btn" 
                                                class="main-btn" 
                                                data-imdb-id="${data.imdbID}">+
                                            </button>
                                            <a>Watchlist</a>
                                        </div>
                                    </div>
                                    <p>${data.Plot}</p>
                                </div>
                            </div>
                            <hr/>
                        `
                    searchEl.value = ""
                    moviesArr = []
                })   
            }
      })
})

const watchListId = JSON.parse(localStorage.getItem("watchList"))

main.addEventListener("click", (e) => {
    if (e.target && e.target.id === "main-btn") {
        const imdbID = e.target.getAttribute("data-imdb-id")
        localStorage.setItem("watchList", JSON.stringify(imdbID))
        if (imdbID) {
            const filmObj = movieData.find(obj => obj.imdbID === watchListId)
            console.log(watchListId)
            main.innerHTML = `
                <p>${filmObj.Title}</p>
            `
        }
    }
})

