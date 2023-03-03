import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const MovieReviewForm = () => {
    return (<>
        <h1>Movie Review Form</h1>
        <form method ="post" action="/api/addMovies" encType="multipart/form-data">
            <label>{"Movie Name: "} <br/>
                <input type="text" name="name"/>
            </label>
            <br/>
            <label>{"Release Date: "}<br/>
                <input type="text" name="releaseDate"/>
            </label>
            <br/>
            <label>{"Actors: (separate with a comma)"}<br/>
                <input type="text" name="actors"/>
            </label>
            <br/>
            <label>{"Rating: (1-10)"}<br/>
                <input type="text" name="rating"/>
            </label>
            <br/>
            <label>{"Movie Poster:"}<br/>
                <input type="file" name="moviePosterSrc"/>
            </label>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    </>)
};

export default MovieReviewForm;