const mainWatchlist = document.getElementById("watchlist-main")
let displayMovie = JSON.parse(localStorage.getItem("movieDataObj"))

function render() {
    for (let i = 0; i < displayMovie.length; i++) {
        mainWatchlist.textContent += `${displayMovie[i].Title}` 
    }
}

render()