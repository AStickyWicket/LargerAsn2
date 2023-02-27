import './App.css';
import HomePage from "./pages/HomePage";
import MovieReviewForm from "./pages/MovieReviewForm";
import TopNavBar from "./components/topnavbar";
import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {

    let [movies, setMovies] = useState(null);

    useEffect(() => {
        fetch("/movies")
            .then(response => response.json() )
            .then( setMovies)
            .catch( error => console.log(error) );
    }, [])

    if (movies === null) {
        return <p>Loading...</p>
    }else {

        return (
            <Router>
                <div className="App">
                    <TopNavBar/>
                    <Routes>
                        <Route path="/" element={<HomePage movies={movies}/>}/>
                        <Route path="/submit-review" element={<MovieReviewForm movies={movies} setMovies={setMovies}/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
