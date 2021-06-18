const api = "bb7d98d462da7e8fab29d731e6823815";
const endpoint = "https://api.themoviedb.org/3";

const pesquisa = () => {
    let tempPesquisa = []
    let tempIds = []
    curPesquisa = JSON.parse(localStorage.getItem('pesquisa'));
    curPesquisa.results.forEach(movie => {
        tempPesquisa.push(movie);
        tempIds.push(movie.id)
    })
    for (let i = 0; i < tempPesquisa.length; i++) {
        let titulo = tempPesquisa[i].title;
        let descricao = tempPesquisa[i].overview;
        let imagem = tempPesquisa[i].poster_path;
        let id = tempIds[i];
        let data = tempPesquisa[i].release_date.split("-");
        data = data[2] + "/" + data[1] + "/" + data[0];
        let filmeEmCaterogia = ``
        filmeEmCategoria = `<div class="col">
                <div class="card">
                    <a class="zoom" href="https://www.themoviedb.org/movie/${id}")} target="_blank"><img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${imagem}"
                        class="card-img-top" alt=${titulo}></a>
                    <div class="card-body shadow" style="min-height: 16rem;">
                        <h5 class="card-title fw-bold">${titulo}</h5>
                        <p class="card-text truncate">${descricao}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted fw-bold">Lançamento: ${data}</small>
                    </div>
                </div>
    
                
            </div>`
        document.getElementById("novaPesquisa").innerHTML += filmeEmCategoria

    }

}
