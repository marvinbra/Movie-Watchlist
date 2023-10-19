const searchEl = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const main = document.getElementById("main")
const mainWatchlist = document.getElementById("watchlist-main")
let dataArr = []
let moviesArr = []

main.addEventListener("click", (e) => {
    if (e.target && e.target.id === "main-btn") {
        console.log("works")
        console.log(dataArr)
        
        moviesArr.forEach( (data)  => {
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
                            <button id="main-btn" class="main-btn">+</button>
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
        })
        
    }
})



searchBtn.addEventListener("click", () => {
        fetch(`https://www.omdbapi.com/?s=${searchEl.value}&apikey=d4da1b9a`)
        .then(res => res.json())
        .then(data => {
            for(let i=0; i < 5; i++) {
                let filmsInfo = data.Search[i].Title
                moviesArr.push(filmsInfo)
                console.log(moviesArr)
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
                                        <button id="main-btn" class="main-btn">+</button>
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
                })   
            }
      })
})
