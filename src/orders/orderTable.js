import React from "react";

const OrderList = ({ orders, table, deleteOrder }) => {
  const filteredOrders = orders.filter((order) => order.table === table);

  const handleDeleteOrder = (uniquqid) => {
    deleteOrder(uniquqid);
  };

  return (
    <div>
      <h2>Orders for {table}</h2>
      <table>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.uniquqid}>
              <td>ID:{order.uniquqid}</td>
              <td>PRICE:{order.price}</td>
              <td>MENU-ITEM:{order.item}</td>
              <td>
                <button onClick={() => handleDeleteOrder(order.uniquqid)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
