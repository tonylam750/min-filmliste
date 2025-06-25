


function renderWatchList(){

    const watchMain = document.getElementById("watchlist-main")
    let watchListArr = JSON.parse(localStorage.getItem('watchlist'));

    if (watchListArr.length === 0) {
            watchMain.innerHTML = `
            <div class="splash-main">
                <i class="fa-solid fa-film fa-5x"></i>
                <p id="empty-text">Legg til Filmliste</p>
            </div>`;
            return
    }

    let watchListHtml = ""
    for (let card of watchListArr ){
    watchListHtml+= card
    }
    watchMain.innerHTML= watchListHtml
    
    watchMain.querySelectorAll(".watchlist-btn").forEach(btn =>{
        btn.textContent ="-"
        btn.addEventListener("click", ()=>{
        btn.textContent ="+"

        const cardHtml = btn.closest(".movie-content").outerHTML
        let arr = JSON.parse(localStorage.getItem("watchlist"));
        const filtered = arr.filter(item => item !== cardHtml);
        localStorage.setItem("watchlist", JSON.stringify(filtered));
        
        
        renderWatchList();
    
        })
    })

}


renderWatchList()


     
     




     


