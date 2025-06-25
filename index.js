

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input")

async function renderMovies() {
    const response = await fetch(`https://www.omdbapi.com/?apikey=ab7d24d4&s=${searchInput.value}&page=1`)
    const data = await response.json()
    let searchHtml = ""

    const detailPromises = data.Search.map(movie =>
        fetch(`https://www.omdbapi.com/?apikey=ab7d24d4&t=${movie.Title}`).then(r => r.json())
    );
    const details = await Promise.all(detailPromises);

    data.Search.forEach((movie, i) => {
        const movieDetail = details[i]
        let html = `
            <div class="movie-content">
                <img src="${movie.Poster}">
                <div class="movie-detail">
                    <h2>${movie.Title} <span><i class="fa-solid fa-star" style="color: #FFD43B;"></i> ${movieDetail.imdbRating}</span> </h2>
                    <div class="movie-info">
                        <p>${movieDetail.Runtime}</p>
                        <p>${movieDetail.Genre}</p>
                        <p><button id="watchlist-btn" class="watchlist-btn">+</button></p>
                    </div>
                    <p>${movieDetail.Plot}</p>
                </div>
            </div>`

        searchHtml += html
    });

    document.getElementById("main").innerHTML = searchHtml
    HandleAddToWatchList()



    console.log(data.Search)

}
function HandleAddToWatchList() {
    document.querySelectorAll(".watchlist-btn").forEach(btn => {
        btn.addEventListener("click", () => {

            const cardHtml = btn.closest('.movie-content').outerHTML;

            let existing = JSON.parse(localStorage.getItem('watchlist') || '[]');

            if (!Array.isArray(existing)) existing = [existing];

            if (!existing.includes(cardHtml)) {
                existing.push(cardHtml);
                localStorage.setItem('watchlist', JSON.stringify(existing));
                btn.disabled = true
            }
        })
    })
}

searchBtn.addEventListener("click", renderMovies)

