import React from "react";

const Orders = ({ orders, players }) => {
    let orderedPlayers = [];
    let totalCost = 0;
    for (const order of orders) {
        if (order) {
            const player = players.find((player) => player.id === order.id);
            orderedPlayers.push(player);
        }
        totalCost += order?.price ? +order.price.split(" ")[0] : 0;
    }
    return (
        <div className="orders sticky top-[40px] min-w-[250px] border-2 border-[#FFFFFF] p-4 rounded-lg">
            <h1 className="text-2xl font-semibold">Order Summary</h1>
            <p className="text-lg font-medium mt-4">
                Selected Players: {orders.length}
            </p>
            <p className="mt-2">Total cost: {totalCost.toFixed(2)} crore</p>
            <div className="players-container my-6">
                <h3 className="text-xl font-semibold mb-2">
                    {orderedPlayers.length > 0 ? "Players" : null}
                </h3>
                <div className="players flex flex-col gap-y-4">
                    {orderedPlayers.map((player) => (
                        <div
                            key={player.id}
                            className="player flex items-center"
                        >
                            <p className="text-lg font-medium">
                                {orderedPlayers.indexOf(player) + 1}.
                            </p>
                            <img
                                className="w-[60px] rounded-full"
                                src={player.img}
                            />
                            {player.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;
