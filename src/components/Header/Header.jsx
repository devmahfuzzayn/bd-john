import React from "react";

const Header = () => {
    return <header className="h-[100px] flex justify-between items-center mx-10">
        <h3 className="text-4xl font-semibold">BD John</h3>
        <nav>
            <ul className="flex gap-x-6 text-[#4365ee]">
                <li><a href="/">Home</a></li>
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/Orders">Orders</a></li>
                <li><a href="/API"></a>API</li>
            </ul>
        </nav>
    </header>;
};

export default Header;
