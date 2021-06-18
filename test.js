const api = "bb7d98d462da7e8fab29d731e6823815";
const endpoint = "https://api.themoviedb.org/3";

let urlComanda = (get, parametros) => {
    return `${endpoint}${get}?api_key=${api}${parametros}`;
}

let filmes = [];
let ids = [];
let videos = [];

const request = async () => {
    const movies = await fetch(urlComanda("/discover/movie", "&language=pt-BR&sort_by=popularity.desc"));
    const jsonMovies = await movies.json();
    jsonMovies.results.forEach(movie => {
        filmes.push(movie);
        ids.push(movie.id);
    })
    // ids.forEach(async (id) => {
    //     const video = await fetch(urlComanda(`/movie/${id}/videos`, "&language=pt-BR"));
    //     const jsonVideos = await video.json();
    //     videos.push(jsonVideos.results[0].key);
    // })
}

// console.log(videos)

let i = 0;
let j = 4;
let track = 0;
const carregarFilmes = () => {
    if (filmes[i] !== undefined) {
        for (i + track; i < j + track; i++) {
            let titulo = filmes[i].title;
            let descricao = filmes[i].overview;
            let imagem = filmes[i].poster_path;
            let id = ids[i];
            let data = filmes[i].release_date.split("-");
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
            document.getElementById('emDestaque').innerHTML += filmeEmCategoria
        }
        track += 4
    }
}

const requestPesquisa = async () => {
    query = document.getElementById("pesquisa");
    queryValue = query.value
    const pesquisa = await fetch(`${endpoint}/search/movie?api_key=${api}&language=pt-BR&query=${queryValue}`);
    const jsonPesquisa = await pesquisa.json();
    localStorage.setItem('pesquisa', JSON.stringify(jsonPesquisa));
    window.location = "pesquisa.html"

}
request()

enter = document.getElementById("meuForm");
enter.addEventListener("submit", (e) => {
    e.preventDefault();
    requestPesquisa()
})

