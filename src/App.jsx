import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Orders from "./components/Orders/Orders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToDb, getOrders } from "../utilities/fakedb";

function App() {
    const [players, setPlayers] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("players.json")
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);

    useEffect(() => {
        const storedOrders = getOrders();
        let savedOrders = [];
        for (const order in storedOrders) {
            const player = players.find(player => player.id === order);
            savedOrders.push(player);
        }
        setOrders(savedOrders);
    }, [players])

    const handleAddToTeam = (id) => {
        const player = players.find((player) => player.id === id);
        const exists = orders.find((pl) => pl.id === id);

        if (!exists) {
            const newOrders = [...orders, player];
            setOrders(newOrders);
            addToDb(id);
            toast.success(`${player.name} added to Order List`, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        } else {
            toast.warning(`${player.name} is already added to Order list!`, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    };

    return (
        <div className="App text-[#FFFFFF]">
            <Header></Header>
            <main className="main-content flex flex-col lg:flex-row gap-10 mx-10 my-10">
                <div className="players-container container mx-auto">
                    <div className="players grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {players.map((player) => (
                            <Player
                                key={player.id}
                                player={player}
                                handleAddToTeam={handleAddToTeam}
                            ></Player>
                        ))}
                    </div>
                </div>
                <div className="orders-container mx-auto">
                    <Orders orders={orders}></Orders>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}

export default App;
