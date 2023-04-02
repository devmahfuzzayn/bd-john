import React from "react";

const Player = (props) => {
    const { name, img } = props.player;
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default Player;
