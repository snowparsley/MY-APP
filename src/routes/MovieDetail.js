import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div>
      {!movie ? (
        <h2>Loading...</h2>
      ) : (
        <Movie
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default MovieDetail;
