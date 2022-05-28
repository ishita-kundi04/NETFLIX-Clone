import React from 'react';
import Row from "./Row";
import requests  from './requests';
import Banner from './Banner';
import Nav from './Nav';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      {/* NavBar */}
      <Nav />
      {/* Banner */}
      <Banner />

      <Row title="Recommended for you" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow={false} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow={false} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} isLargeRow={false} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} isLargeRow={false} />
      <Row title="Romance Now" fetchURL={requests.fetchRomanceMovies} isLargeRow={false} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} isLargeRow={false} />

    </div>
  );
};

export default App;