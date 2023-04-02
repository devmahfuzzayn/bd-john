import React from "react";

const Orders = ({ orders }) => {
    let totalCost = 0;
    for (const order of orders) {
        totalCost += order?.price ? +order.price.split(" ")[0] : 0;
    }
    return (
        <div className="orders sticky top-[40px] min-w-[250px] border-2 border-[#FFFFFF] p-4 rounded-lg">
            <h1 className="text-2xl font-semibold">Order Summary</h1>
            <p className="text-lg font-medium mt-4">
                Selected Players: {orders.length}
            </p>
            <p className="mt-2">Total cost: {totalCost.toFixed(2)} crore</p>
        </div>
    );
};

export default Orders;
