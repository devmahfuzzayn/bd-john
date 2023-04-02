import React from "react";

const Player = (props) => {
    const { id, name, img, price, matches, balls, runs, wickets } = props.player;
    const handleAddToTeam = props.handleAddToTeam;
    return (
        <div className="player border-2 border-[#FFFFFF] p-4 rounded-lg">
            <div className="image-container flex justify-center">
                <img className="w-full max-w-[300px]" src={img} alt="" />
            </div>
            <h3 className="text-2xl justify-self-end-end font-medium my-4">
                {name}
            </h3>
            <p className="text-lg">Price: {price}</p>
            <div className="cricket-score-information border-2 border-[#2b2727] p-3 mt-4 rounded-lg">
                <p>Matches: {matches}</p>
                <p>Balls: {balls}</p>
                <p>Runs: {runs}</p>
                <p>Wickets: {wickets}</p>
            </div>
            <button
                onClick={() => handleAddToTeam(id)}
                className="bg-[#FFFFFF] hover:bg-[#36a379] text-[#111111] px-4 py-1 mt-4 rounded-lg"
            >
                Add to Team
            </button>
        </div>
    );
};

export default Player;
