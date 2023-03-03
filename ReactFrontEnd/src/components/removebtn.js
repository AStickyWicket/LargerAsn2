import React from "react";
import Button from "react-bootstrap/Button";

const RemoveBtn = (props) => {
    const movieObj = props.movie[props.index];
    return(
    <>
        <Button variant="danger" onClick={() => {
            fetch("/api/deleteMovies", {
                method: "POST",
                body: JSON.stringify(movieObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(`${data.name} successfully deleted`)
                    props.setMovie(props.movie.filter((movie, index) => index !== props.index))})
                .catch(error => console.log('Response '+ error));

        }}>Remove {movieObj.name}</Button>
    </>
    )
}

export default RemoveBtn;