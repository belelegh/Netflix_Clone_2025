// const API_KEY = process.env.REACT_APP_API_KEY;

// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
//   fetchTopRatedTv: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
//   fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
//   fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
// };

// export default requests;

// const API_KEY = process.env.REACT_APP_API_KEY;
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discovery/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
//   fetchComedyMovies: `/discovery/movies?api_key=${API_KEY}&with_geners=35`,
//   fetchHorrorMovies: `/discovery/movies?api_key=${API_KEY}&with_geners=27`,
//   fetchRomanceMovies: `/discovery/movies?api_key=${API_KEY}&with_geners=10749`,
//   fetchDocumentaries: `/discovery/movies?api_key=${API_KEY}&with_geners=99`,
//   fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
// };
// export default requests;

const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  // Your existing endpoints...
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedTv: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,

  // New: Function to get videos for a specific movie/TV show
  fetchMovieVideos: (movieId) =>
    `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
  fetchTvVideos: (tvId) =>
    `/tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`,
};

export default requests;
