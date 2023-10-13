/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import OrderCard from '../../components/cards/OrderCards';
import { getAllOrders } from '../../ApiCalls/OrderApiCalls';



function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const getTheOrders = () => {
    getAllOrders().then(setOrders);
  };
  useEffect(() => {
    getTheOrders();
    console.warn(orders)
  }, []);
  return (
    <>

      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '22vh',
          padding: '7px',
          // maxWidth: '100px',
          margin: '0 auto',
        }}
      >
        <h1>All Ordered Items</h1>
      </div>
      <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {orders?.map((order) => (
          <OrderCard OrderObj={order} />))}
      </div>
    </>
  );
}
export default OrdersPage;