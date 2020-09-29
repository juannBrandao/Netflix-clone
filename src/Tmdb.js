const API_KEY = '229e0fc4d2b89c995cde8854be26d256';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- filmes originais
- filmes recomendados
- em alta
- a��o
- comedia
- terror
- romance 
- document�rios
*/
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}
export default {
    getHomelist: async() =>{
        return[
            {
                slug:'originals',
                title:' Originais do netiflix',
                items:await basicFetch(`/discover/tv?whit_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'Recomendados Para Você',
                items:await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'Topratet',
                title:'Em alta',
                items:await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'Action',
                title:'Ação',
                items:await basicFetch(`/discover/movie?whit_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'Comedy',
                title:'Comédia',
                items:await basicFetch(`/discover/movie?whit_genres=34&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'Orror',
                title:'Terror',
                items:await basicFetch(`/discover/movie?whit_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'Romance',
                items:await basicFetch(`/discover/movie?whit_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'Documentary',
                title:'Documentarios',
                items:await basicFetch(`/discover/movie?whit_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async(movieId, type) =>{
        let info = {};
        if (movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null
                break;
            }
        }
        return info;
    }
}