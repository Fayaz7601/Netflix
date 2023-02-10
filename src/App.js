import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <Banner fetchurl={requests.fetchNetflixOriginals}></Banner>

      <Row isLargeRow={true} title="NETFLIX ORIGINALS" fetchurl={requests.fetchNetflixOriginals}></Row>
      <Row title="TRENDING" fetchurl={requests.fetchTrending}></Row>
      <Row title="TOP RATED" fetchurl={requests.fetchTopRated}></Row>
      <Row title="ACTION MOVIES" fetchurl={requests.fetchActionMovies}></Row>
      <Row title="COMEDY MOVIES" fetchurl={requests.fetchComedyMovies}></Row>
      <Row title="HORROR MOVIES" fetchurl={requests.fetchHorrorMovies}></Row>
      <Row title="ROMANCE" fetchurl={requests.fetchRomanceMovies}></Row>
      <Row title="DOCUMENTARIES" fetchurl={requests.fetchDocumentaries}></Row>

    </div>
  );
}

export default App;
