import React, { useEffect, useState } from 'react';
import '../style/Banner.css';
import axios from '../axios'
import requests from '../Requests';


export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request
        }
        fetchData()
    }, [])

    console.log(movie)
    function trunclate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' :  string;
    }

    return(
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://i.imgur.com/e1hLQ2m.png')`,
            backgroundPosition: 'center center',
        }}>
            <div className='banner-content'>
                <h1 className='banner-movie-title'>Movie title</h1>
                <div className='banner-btns'>
                    <button className='banner-btn'>Play</button>
                    <button className='banner-btn'>My List</button>
                </div>
                <h2 className='banner-description'>{trunclate(`
                Movie description Movie description Movie description
                Movie description Movie description Movie description 
                Movie description Movie description Movie description
                Movie description Movie description Movie description
                `,100)}</h2>
            </div>
            <div className='banner__fadeBottom'/>
        </header>
    )
}