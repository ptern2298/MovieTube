import React from 'react';
import PageHeader from '../components/PageHeader';
import Banner from "../components/Banner";
import requests from "../Requests";
import Row from "../components/Row";
import '../App.css';

export default function HomePage() {
    return(
        <div className='app-container'>
            <PageHeader/>
            <Banner/>
            <Row
                title="Tranding"
                fetchURL={requests.fetchTrending}
                isLarge
            />
            <Row
                title="Top Rated"
                fetchURL={requests.fetchTopRated}
            />
            <Row
                title="Originals"
                fetchURL={requests.fetchNetflixOriginals}
            />
            <Row
                title="Action Movies"
                fetchURL={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                fetchURL={requests.fetchComedyMovies}
            />
            <Row
                title="Documentaries"
                fetchURL={requests.fetchDocumentaries}
            />
            <Row
                title="Horror Movies"
                fetchURL={requests.fetchHorrorMovies}
            />
            <Row
                title="Romance Movies"
                fetchURL={requests.fetchRomanceMovies}
            />
        </div>
    )
}