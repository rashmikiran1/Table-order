import React, { useState, useEffect } from "react";
import OrderForm from "./orders/orderForm";
import OrderList from "./orders/orderTable";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const deleteOrder = (uniquqid) => {
    setOrders(orders.filter((order) => order.uniquqid !== uniquqid));
  };

  return (
    <div>
      <h1>Order App</h1>
      <OrderForm addOrder={addOrder} />
      <OrderList orders={orders} table="table1" deleteOrder={deleteOrder} />
      <OrderList orders={orders} table="table2" deleteOrder={deleteOrder} />
      <OrderList orders={orders} table="table3" deleteOrder={deleteOrder} />
    </div>
  );
}

export default App;
