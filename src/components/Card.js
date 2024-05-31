import React from "react";


const Card = ({name,id, email}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow tc">
            <img alt = 'robot-img'src={`https://www.robohash.org/${id}200x200`} />
            <div><h2>{name}</h2></div>
            <p>{email}</p>
        </div>
    )
}

export default Card