const API_KEY = "dbb2b031cbc2e030f6cdfac8b6721b45";
const API_BASE = "https://api.themoviedb.org/3"; //base link to do API request

/*
-Netflix Original
-Trending (recomendados)
-Top Rated (em alta)
-Action
-Comedy
-Horror
-Romance
-Documentaries
*/

const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`); //Await Api fetch and then do JSON fetch
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async()=>{
        return[
            {
                slug: 'originals',
                title: 'Netflix Originals',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`) //Await API response and then fill the items
            },
            {
                slug: 'trending',
                title: 'Recommended for you',
                items: await basicFetch(`/trending/all/week&api_key=${API_KEY}`)
            },
            {
                slug: 'top rated',
                title: 'On Fire',
                items: await basicFetch(`/movie/top_rated&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentaries',
                title: 'Documentaries',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            },
        ];
    }
}