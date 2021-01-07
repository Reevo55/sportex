import React from 'react'

function Img64(props) {
    return (
        <img className={props.style} src={atob(props.data)} alt="zdjęcie"/>
    )
}

export default Img64
