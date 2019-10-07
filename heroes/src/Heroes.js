import React from "react"

function Heroes(props){
    return(
        <div className="grid">
            <h1>{props.handleChange}</h1>
            <img alt="im-img" src={props.heroes.image} />
            <p className="heroes-description">{props.heroes.description}</p>
        </div>
    )
}
export default Heroes