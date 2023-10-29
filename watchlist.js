const main = document.getElementById("watchlist-main")
const deleteBtn = document.getElementById("remove-btn")
const watchListID = JSON.parse(localStorage.getItem("watchListID"))
let data = JSON.parse(localStorage.getItem("movieDataObj"))

function render() {
    main.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        //console.log(data)
           main.innerHTML += `
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
                                                id="remove-btn" 
                                                class="main-btn" 
                                                data-imdb-remove-id="${data[i].imdbID}">-
                                            </button>
                                            <a>remove</a>
                                        </div>
                                    </div>
                                    <p>${data[i].Plot}</p>
                                </div>
                            </div>
                            <hr/>
                        
           `   
    }
}

main.addEventListener("click", (e) => {
    if(e.target && e.target.id === "remove-btn") {
        const removeID = e.target.getAttribute("data-imdb-remove-id")
        
        let removeMovieData = data.find(obj => obj.imdbID === removeID)
        
        if(removeMovieData) {
            data = data.filter(function(film){
            return film.imdbID !== removeMovieData.imdbID
        })
    }
    localStorage.setItem("movieDataObj", JSON.stringify(data))
    render()
   }
})
    
deleteBtn.addEventListener("click", ()=>{
    localStorage.clear()
    main.innerHTML = ``
})

render()