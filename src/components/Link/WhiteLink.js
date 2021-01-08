import React from 'react'
import { Link } from "react-router-dom";
import style from "./WhiteLink.module.css";

function WhiteLink( props ) {
    return (
        <Link className={[style.Link, props.style].join(" ")} to={props.to}> { props.children } </Link>
    )
}

export default WhiteLink; 