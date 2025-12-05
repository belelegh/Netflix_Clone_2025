// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";
// import requests from "../../utils/requests"; 
// import "./banner.css"
// const Banner = () => {
//   const [movie, setMovie] = useState(null); // Changed from {} to null
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Truncate function (was missing in your code)
//   function truncate(str, n) {
//     if (!str) return "";
//     return str.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         // Fixed: Added await and proper axios call
//         const request = await axios.get(requests.fetchNetflixOriginals);
//         console.log(request);

//         // Fixed: Check if results exist
//         if (request.data.results && request.data.results.length > 0) {
//           const randomMovie =
//             request.data.results[
//               Math.floor(Math.random() * request.data.results.length)
//             ];
//           setMovie(randomMovie);
//         } else {
//           setError("No movies found");
//         }
//       } catch (error) {
//         console.log("error", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Fixed: Added empty dependency array

//   // If loading or no movie, show fallback
//   if (loading) {
//     return <div className="banner loading">Loading...</div>;
//   }

//   if (error || !movie) {
//     return (
//       <div
//         className="banner error"
//         style={{
//           background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
//           minHeight: "448px",
//         }}
//       >
//         <div className="banner-contents">
//           <h1>Unable to load movie data</h1>
//         </div>
//       </div>
//     );
//   }

//   // Fixed: Added fallback for missing backdrop_path
//   const backgroundImage = movie?.backdrop_path
//     ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
//     : "linear-gradient(to right, #0f0c29, #302b63, #24243e)";

//   // Fixed: title was misspelled as "tittle"
//   const movieTitle =
//     movie?.title || movie?.name || movie?.original_name || "Unknown Title";

//   return (
//     <div
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: backgroundImage,
//         backgroundPosition: "center center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "448px", // Added minimum height
//         position: "relative", // Added for proper layering
//       }}
//     >
//       {/* Overlay for better text readability */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: "rgba(0, 0, 0, 0.4)",
//           backgroundImage:
//             "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
//         }}
//       />

//       <div
//         className="banner-contents"
//         style={{ position: "relative", zIndex: 2 }}
//       >
//         <h1 className="banner-title">{movieTitle}</h1>
//         <div className="banner-buttons">
//           <button className="banner-button-play">Play</button>
//           <button className="banner-button-list">My List</button>
//         </div>
//         <h1 className="banner-description">
//           {truncate(movie?.overview || "No description available", 150)}
//         </h1>
//       </div>
//       <div className="banner-fadeBottom"></div>
//     </div>
//   );
// };

// export default Banner;


import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Fetch a random Netflix original
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];
      setMovie(randomMovie);

      // Fetch videos for this movie
      if (randomMovie?.id) {
        const videoResponse = await axios.get(
          `/movie/${randomMovie.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
        );

        const videos = videoResponse.data.results;
        // Find trailer
        const trailer = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        setTrailer(trailer || null);
      }
    }
    fetchData();
  }, []);

  // Truncate description
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          {trailer && (
            <button
              className="banner__button"
              onClick={() => {
                // Open trailer modal or play trailer
                window.open(
                  `https://www.youtube.com/watch?v=${trailer.key}`,
                  "_blank"
                );
              }}
            >
              Watch Trailer
            </button>
          )}
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;