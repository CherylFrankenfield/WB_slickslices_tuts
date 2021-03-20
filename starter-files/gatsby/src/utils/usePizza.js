import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // Create some state to hold order
  // Below commented out b/c moved useState up to provider
  // const [order, setOrder] = useState([]);
  const [order, setOrder] = useContext(OrderContext);
  // Make a function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // Make a function to remove things from order
  function removeFromOrder(index) {
    // everything before the item we want to remove and everything after the item we want to remomve
    setOrder([
      ...order.slice(0, index),
      ...order.slice(index + 1),
    ]);
  }
  // Send this data to a serverless function on checkout
  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}