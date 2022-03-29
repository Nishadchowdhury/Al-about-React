import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';
import './Restaurant.css';


const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    // console.log(meals);

    useEffect(()=>{
        const storedOrder = getStoredCart();
        const savedOrder = [];

        for(const id in storedOrder){
            const addedMeal = meals.find(meal => meal.idMeal === id);
            if(addedMeal){
                const quantity = storedOrder[id];
                addedMeal.quantity = quantity;
                savedOrder.push(addedMeal);
            }
        }
        setOrders(savedOrder)
    },[meals]);



    const handleAddToOrder = meal => {
        let newOrders = [];
        const exists = orders.find(m => m.idMeal === meal.idMeal);
        if(exists){
            const rest = orders.filter(m => m.idMeal !== meal.idMeal);
            exists.quantity = exists.quantity + 1;
            newOrders = [...rest , meal]
        }else{
            meal.quantity = 1;
            newOrders = [...orders, meal];
        }
        
        addToDb(meal.idMeal);
        setOrders(newOrders);
    }
    

    return (
        <div className="restaurant-menu">
            <div className="meals-container">
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        handleAddToOrder={handleAddToOrder}
                        meal={meal}
                    ></Meal>)
                }
            </div>
            <div className="order-list">
                <OrderList orders={orders}></OrderList>
            </div>
        </div>

    );
};

export default Restaurant;