import React from "react";
import '../App.css';
import Removebtn from "../components/removebtn";



const HomePage = (props) => (
    <>
        <h1>David's Movie Review Site</h1>
        <ul className='ul-none'>
            {props.movies.map( (movie, index) => (
                <>
                    <div id={movie.name + movie.releaseDate} style={{border:'1px solid black' }}>
                        <li key={index + movie.moviePosterSrc}> <img className='img-poster' src={movie.moviePosterSrc} alt={movie.name + ' poster'}/></li>
                        <li key={index + movie.name}>Movie: {movie.name}</li>
                        <li key={index + movie.releaseDate}>Year: {movie.releaseDate}</li>
                        <li key={index + movie.name + 'actors'}>Actors: {movie.actors}</li>
                        <li key={index + movie.rating}>Review: {movie.rating}/10</li>
                        {<Removebtn movie={props.movies} setMovie={props.setMovies} index={index}/>}
                    </div>
                </>
                ))}
        </ul>
    </>
);


export default HomePage;