/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ClosedOrderCard from '../../../components/cards/ClosedOrderCard';
import { getClosedOrders } from '../../../ApiCalls/OrderApiCalls';

function ClosedOrdersPage() {
  const [closedOrders, setClosedOrders] = useState([]);
  
  const allClosedOrders = () => {
    getClosedOrders ().then(setClosedOrders);
  };

  useEffect(() => {
    allClosedOrders();
  }, []);

  return (
    <>
      <div className="text-center d-flex flex-column justify-content-center align-content-center" style={{ height: '22vh', padding: '7px' }}>
        <h1>All Orders Paid For</h1>
      </div>
      <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {closedOrders?.map((closedOrder) => (
          <ClosedOrderCard OrderObj={closedOrder} />
        ))}
      </div>
   
    </>
  );
}

export default ClosedOrdersPage;