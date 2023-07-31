import React, { useState } from "react";

const OrderForm = ({ addOrder }) => {
  const [order, setOrder] = useState({
    uniquqid: "",
    price: "",
    item: "",
    table: "table1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleAddOrder = () => {
    addOrder(order);
    setOrder({
      uniquqid: "",
      price: "",
      item: "",
      table: "table1",
    });
  };

  return (
    <div>
      <input
        type="number"
        name="uniquqid"
        value={order.uniquqid}
        placeholder="Unique ID"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={order.price}
        placeholder="Price"
        onChange={handleChange}
      />
      <input
        type="text"
        name="item"
        value={order.item}
        placeholder="Item"
        onChange={handleChange}
      />
      <select name="table" value={order.table} onChange={handleChange}>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>
      <button onClick={handleAddOrder}>Book Order</button>
    </div>
  );
};

export default OrderForm;
