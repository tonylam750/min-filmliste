
const searchBtn = document.getElementById("search-btn")
const searchInput = document.getElementById("search-input")


async function renderMovies(){
    const response = await fetch(`http://www.omdbapi.com/?apikey=ab7d24d4&s=${searchInput.value}&page=1`)
    const data = await response.json()
    let html =""
    
    for (let movie of data.Search){
        const res = await fetch(`http://www.omdbapi.com/?apikey=ab7d24d4&t=${movie.Title}`)
        const movieDetail = await res.json()
        
        html+=`
            <div class="movie-content">
                <img src="${movie.Poster}">
                <div class="movie-detail">
                    <h2>${movie.Title}</h2>
                    <div class="movie-info">
                        <p>${movieDetail.Runtime}</p>
                        <p>${movieDetail.Genre}</p>
                        <p>Watchlist</p>
                    </div>
                    <p>${movieDetail.Plot}</p>
                </div>
            </div>`
    };

    document.getElementById("main").innerHTML=html
    
    console.log(data.Search)

}

searchBtn.addEventListener("click", renderMovies)

// Poster
// : 
// "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg"
// Title
// : 
// "Batman Begins"
// Type
// : 
// "movie"
// Year
// : 
// "2005"
// imdbID
// : 
// "tt0372784"

// Actors
// : 
// "Kevin Conroy, Loren Lester, Efrem Zimbalist Jr."
// Awards
// : 
// "Won 1 Primetime Emmy. 5 wins & 19 nominations total"
// Country
// : 
// "United States"
// Director
// : 
// "N/A"
// Genre
// : 
// "Animation, Action, Adventure"
// Language
// : 
// "English"
// Metascore
// : 
// "N/A"
// Plot
// : 
// "Follows the adventures of billionaire playboy Bruce Wayne who is secretly the vigilante known as Batman, whom with help from various side kicks and allies fights a rouges gallery of criminals and super-villains in Gotham City."
// Poster
// : 
// "https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_SX300.jpg"
// Rated
// : 
// "TV-PG"
// Ratings
// : 
// [{…}]
// Released
// : 
// "05 Sep 1992"
// Response
// : 
// "True"
// Runtime
// : 
// "23 min"
// Title
// : 
// "Batman: The Animated Series"
// Type
// : 
// "series"
// Writer
// : 
// "Bill Finger, Bob Kane, Eric Radomski"
// Year
// : 
// "1992–1995"
// imdbID
// : 
// "tt0103359"
// imdbRating
// : 
// "9.0"
// imdbVotes
// : 
// "127,724"
// totalSeasons
// : 
// "4"
