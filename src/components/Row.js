import React, {useEffect, useState} from 'react';
import axios from "../axios";
import '../style/Row.css';

function Row({ title, fetchURL, isLarge = false}) {
    const [movies, setMovies] = useState([]);
    const movieBaseURL = 'https://image.tmdb.org/t/p/original/';
    useEffect(() => {
        async function fetchMovieData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchMovieData();
    }, [fetchURL])
    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className='movies-row'>
                {movies.map(movie =>(
                    ((isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path)) && (
                        <img
                            className={`movie-poster ${isLarge && 'movie-large-poster'}`}
                            key={movie.id}
                            src={`${movieBaseURL}${ isLarge ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )
                ))}
            </div>
        </div>
    )
}
export default Row;