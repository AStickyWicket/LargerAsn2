import React from "react";

const RemoveBtn = (props) => {
    let movieObj = props.movie[props.index];
    return(
    <>
        <button onClick={() => {
            document.getElementById(movieObj.name + movieObj.releaseDate).remove();
            delete props.movie[props.index];
        }}>Remove {movieObj.name}</button>
    </>
    )
}

export default RemoveBtn;