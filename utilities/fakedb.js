// use local storage to manage cart data
const addToDb = (id) => {
    let shoppingCart = getOrders();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    } else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem("orders", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
    const shoppingCart = getOrders();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem("orders", JSON.stringify(shoppingCart));
    }
};

const getOrders = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("orders");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
};

const deleteOrders = () => {
    localStorage.removeItem("orders");
};

export { addToDb, removeFromDb, getOrders, deleteOrders };
