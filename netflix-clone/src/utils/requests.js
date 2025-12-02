const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discovery/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
  fetchComedyMovies: `/discovery/movies?api_key=${API_KEY}&with_geners=35`,
  fetchHorrorMovies: `/discovery/movies?api_key=${API_KEY}&with_geners=27`,
  fetchRomanceMovies: `/discovery/movies?api_key=${API_KEY}&with_geners=10749`,
  fetchDocumentaries: `/discovery/movies?api_key=${API_KEY}&with_geners=99`,
  fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
