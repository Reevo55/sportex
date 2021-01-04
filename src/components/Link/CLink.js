import React from 'react'
import { Link } from "react-router-dom";
import style from "./CLink.module.css";

function CLink( props ) {
    return (
        <Link className={[style.Link, props.style].join(" ")} to={props.to}> { props.children } </Link>
    )
}

export default CLink; 