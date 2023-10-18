const searchEl = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const main = document.getElementById("main")
const mainWatchlist = document.getElementById("watchlist-main")
let dataArr = []

searchBtn.addEventListener("click", () => {
    fetch(`https://www.omdbapi.com/?t=${searchEl.value}&apikey=d4da1b9a`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dataArr.push(data)
            main.innerHTML += `
                <div>
                    <img src="${data.Poster}" />
                </div>
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
                <hr />
            `
            searchEl.value = ""
        })
})

main.addEventListener("click", (e) => {
    if (e.target && e.target.id === "main-btn") {
        console.log("works")
        console.log(dataArr)
        
        dataArr.forEach( (data)  => {
                main.innerHTML += `
            <div class="movieContainer">
                <div>
                    <img src="${data.Poster}" />
                </div>
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
                <hr />
            </div class="movieContainer">
            `
            searchEl.value = ""
        })
        
    }
})

document.getElementById("test").addEventListener("click", () => {
    fetch(`https://www.omdbapi.com/?s=${searchEl.value}&apikey=d4da1b9a`)
        .then(res => res.json())
        .then(data => {
            for(let i=0; i < 5; i++) {
                console.log(data.Search[i].Title)
            }
        })
})

searchBtn.addEventListener("click", () => {
    for (let i = 0; i < moviesArr.length; i++) {
        fetch(`https://www.omdbapi.com/?t=${moviesArr[i]}&apikey=d4da1b9a`)
            .then(res => res.json())
            .then(data => {
                console.log(data.Title)
        })
    }
})
