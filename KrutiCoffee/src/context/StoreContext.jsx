import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "./StoreContext.js";
import { Shop_list } from "../assets/admin_assets/ShopJson.js";

const COFFEE_FALLBACK_IMAGE = "https://res.cloudinary.com/dttnc62hp/image/upload/v1773683970/VietnameseIcedColdCoffee_ly5abn.jpg";

const fallbackFoodList = [
    {
        _id: "fallback-hot-1",
        name: "South Indian Filter Coffee",
        description: "Authentic brew blended with hot frothy milk.",
        price: 175,
        image: COFFEE_FALLBACK_IMAGE,
        category: "Hot Coffees",
    },
    {
        _id: "fallback-cold-1",
        name: "Vietnamese Style Cold Coffee",
        description: "Dark filter coffee brewed over condensed milk for a rich, creamy finish.",
        price: 235,
        image: "https://res.cloudinary.com/dttnc62hp/image/upload/v1773683970/VietnameseIcedColdCoffee_ly5abn.jpg",
        category: "Coffees Served Cold",
    },
    {
        _id: "fallback-manual-1",
        name: "Siphon Brew",
        description: "Vacuum pressure brewing for tea-like clarity.",
        price: 275,
        image: "https://res.cloudinary.com/dttnc62hp/image/upload/v1773683970/VietnameseIcedColdCoffee_ly5abn.jpg",
        category: "Manual Brews",
    },
    {
        _id: "fallback-dessert-1",
        name: "Classic Tiramisu",
        description: "Coffee-soaked sponge with velvety mascarpone.",
        price: 255,
        image: "https://res.cloudinary.com/dttnc62hp/image/upload/v1773683970/VietnameseIcedColdCoffee_ly5abn.jpg",
        category: "Signature Cakes & Desserts",
    },
    {
        _id: "fallback-savory-1",
        name: "Paneer Tikka Sandwich",
        description: "Spiced cottage cheese in toasted sourdough.",
        price: 185,
        image: "https://res.cloudinary.com/dttnc62hp/image/upload/v1773683970/VietnameseIcedColdCoffee_ly5abn.jpg",
        category: "Savory Selection",
    },
    {
        _id: "fallback-mocktail-1",
        name: "Espresso Tonic",
        description: "Double shot espresso with tonic water and lime.",
        price: 215,
        image: "https://res.cloudinary.com/dttnc62hp/image/upload/v1773683970/VietnameseIcedColdCoffee_ly5abn.jpg",
        category: "Coffee Mocktails",
    },
];

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [food_list, setFood_list] = useState([]);
    const [token, setToken] = useState("");
    const url = "http://localhost:4000";

    

    // Adds items to cart and syncs with database if logged in
    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };

    // Removes items from cart and syncs with database if logged in
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1,
        }));
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    };

    // Calculates total price for the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    // const fetchFoodList = async () => {
    //     try {
    //         const response = await axios.get(url + "/api/food/list");
    //         setFood_list(response.data.data);
    //     } catch (error) {
    //         console.error("Error fetching food list", error);
    //     }
    // };

    const getFoodListFromResponse = (payload) => {
        if (Array.isArray(payload)) return payload;
        if (payload && Array.isArray(payload.data)) return payload.data;
        if (payload && Array.isArray(payload.items)) return payload.items;
        return [];
    };

    const normalizeFetchedImage = (item) => {
        const imageValue = item.image;
        if (!imageValue || typeof imageValue !== "string") return COFFEE_FALLBACK_IMAGE;
        return imageValue.trim() || COFFEE_FALLBACK_IMAGE;
    };

    const fetchFoodList = useCallback(async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            const list = getFoodListFromResponse(response.data).map((item) => ({
                ...item,
                image: normalizeFetchedImage(item),
            }));
            setFood_list(list.length > 0 ? list : fallbackFoodList);
        } catch (error) {
            console.error("Backend is not responding!", error);
            setFood_list(fallbackFoodList);
        }
    }, [url]);

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data.cartData);
    };

    // Load data on startup
    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        }
        loadData();
    }, [fetchFoodList]);

    const contextValue = {
        food_list,
        Shop_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;