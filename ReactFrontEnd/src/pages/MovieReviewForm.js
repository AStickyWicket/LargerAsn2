import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const MovieReviewForm = (props) => {
    const [newMovie, setMovie] = useState({
        name: "", releaseDate: "", actors: "", rating: "", moviePosterSrc: "default.jpg"

    });
    const navigate = useNavigate();
    const handleSubmit =  (event) => {
        event.preventDefault();
        if (movieValid()) {
            fetch("/addMovies", {
                method: "POST",
                body: JSON.stringify(newMovie),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    props.setMovies([...props.movies, data])
                    navigate('/');
                })
                .catch(error => console.log('Response '+ error));}
    }

    const movieValid = () => {
        if (newMovie.name === "") {
            alert("Please enter a movie name");
            return false;
        }
        if (newMovie.releaseDate === "") {
            alert("Please enter a release date");
            return false;
        }
        if (newMovie.actors === "") {
            alert("Please enter at least one actor");
            return false;
        } else {
            newMovie.actors = newMovie.actors.split(',');
        }
        if (newMovie.rating === "") {
            alert("Please enter a rating");
            return false;
        }
        if (newMovie.rating < 1 || newMovie.rating > 10) {
            alert("Please enter a rating between 1 and 10");
            return false;
        }
        return true;
    }

    return (<>
        <h1>Movie Review Form</h1>
        <form onSubmit={handleSubmit}>
            <label>{"Movie Name: "} <br/>
                <input type="text"
                       value={newMovie.name}
                       onChange={(e) => setMovie({...newMovie, name: e.target.value})}/>
            </label>
            <br/>
            <label>{"Release Date: "}<br/>
                <input type="text"
                       value={newMovie.releaseDate}
                       onChange={(e) => setMovie({...newMovie, releaseDate: e.target.value})}/>
            </label>
            <br/>
            <label>{"Actors: (separate with a comma)"}<br/>
                <input type="text"
                       value={newMovie.actors}
                       onChange={(e) => setMovie({...newMovie, actors: e.target.value})}/>
            </label>
            <br/>
            <label>{"Rating: (1-10)"}<br/>
                <input type="text"
                       value={newMovie.rating}
                       onChange={(e) => setMovie({...newMovie, rating: e.target.value})}/>
            </label>
            <br/>
            <label>{"Movie Poster:"}<br/>
                <select name="poster" id="poster"
                        onChange={(e) => setMovie({...newMovie, moviePosterSrc: e.target.value})}>
                    <option value="default.jpg">Default</option>
                    <option value="blackwidow.jpg">Black Widow</option>
                    <option value="sherlockholmes.jpg">Sherlock Holmes</option>
                </select>
            </label>
            <br/>
            <input type="submit"/>
        </form>
    </>)
};

export default MovieReviewForm;