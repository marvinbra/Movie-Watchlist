const searchEl = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const main = document.getElementById("main")
let dataArr = []

searchBtn.addEventListener("click", () => {
    fetch(`https://www.omdbapi.com/?t=${searchEl.value}&apikey=d4da1b9a`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dataArr = data
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
    }
})