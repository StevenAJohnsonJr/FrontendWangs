/* eslint-disable */
import React, { useEffect, useState } from 'react';
import OrderCard from '../../components/cards/OrderCards';
import { getAllOrders } from '../../ApiCalls/OrderApiCalls';

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  
  const getTheOrders = () => {
    getAllOrders().then(setOrders);
  };

  useEffect(() => {
    getTheOrders();
  }, []);

  return (
    <>
      <div className="text-center d-flex flex-column justify-content-center align-content-center" style={{ height: '22vh', padding: '7px' }}>
        <h1>All Ordered Items</h1>
      </div>
      <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {orders?.map((order) => (
          <OrderCard OrderObj={order} />
        ))}
      </div>
   
    </>
  );
}

export default OrdersPage;