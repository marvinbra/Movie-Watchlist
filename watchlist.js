const mainWatchlist = document.getElementById("watchlist-main")
let displayMovie = JSON.parse(localStorage.getItem("movieDataObj"))

function render() {
    mainWatchlist.textContent = `${displayMovie.Title}`
    console.log(displayMovie)
}

render()