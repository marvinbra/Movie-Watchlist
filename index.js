const searchEl = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", () => {
    fetch(`https://www.omdbapi.com/?s=${searchEl.value}&apikey=d4da1b9a`)
        .then(res => res.json())
        .then(data => console.log(data.Search[0]))
})