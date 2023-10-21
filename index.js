const searchEl = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const main = document.getElementById("main")
const mainWatchlist = document.getElementById("watchlist-main")
let moviesArr = []
let watchList = []

searchBtn.addEventListener("click", () => {
    fetch(`https://www.omdbapi.com/?s=${searchEl.value}&apikey=d4da1b9a`)
        .then(res => res.json())
        .then(data => {
            for(let i=0; i < 5; i++) {
                let filmsInfo = data.Search[i].Title
                let idInfo = data.Search[i]
                main.innerHTML = ``
                moviesArr.push(filmsInfo)
                console.log(moviesArr)
                
                fetch(`https://www.omdbapi.com/?i=${idInfo.imdbID}&apikey=d4da1b9a`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.imdbID)
                    })
                
            }
            for (let i = 0; i < moviesArr.length; i++) {
                fetch(`https://www.omdbapi.com/?t=${moviesArr[i]}&apikey=d4da1b9a`)
                    .then(res => res.json())
                    .then(data => {
                         main.innerHTML += `
                            <div class="film-img">
                                <img src="${data.Poster}" />
                            </div>
                            <div class="film-info">
                                <div>
                                    <h3>${data.Title}</h3>
                                    <a>${data.imdbRating}</a>
                                </div>
                                <div>
                                    <p>${data.Runtime}</p>
                                    <p>${data.Genre}</p>
                                    <div>
                                        <button
                                         id="main-btn" 
                                         class="main-btn" 
                                         data-imdb-id="${data.imdbID}">+</button>
                                        <a>Watchlist</a>
                                    </div>
                                </div>
                                <div>
                                    <p>${data.Plot}</p>
                                </div>
                            </div>
                            <hr />
                        `
                    searchEl.value = ""
                    moviesArr = []
                })   
            }
      })
})

main.addEventListener("click", (e) => {
    if (e.target && e.target.id === "main-btn") {
        const imdbID = e.target.getAttribute("data-imdb-id")
        console.log(imdbID)
        watchList.push(imdbID)
        localStorage.setItem("watchList", JSON.stringify(watchList))
        const watchListId = localStorage.getItem("watchList")
        console.log(watchListId)
    }
})
