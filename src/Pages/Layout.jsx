import React from "react";
import Row from "../components/Row";
import Requests from "../Requests";
import { Banner } from "../components/Banner";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentary Movies" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
};

export default Layout;
