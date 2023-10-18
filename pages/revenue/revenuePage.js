/* eslint-disable */
import React, { useState } from 'react';
import { getAllClosedOrders, getAllTotals } from '../../ApiCalls/RevenueApiCalls';

function RevenuePage() {
  const [closedOrdersRevenue, setClosedOrdersRevenue] = useState(null);
  const [allMoney, setAllMoney] = useState(null);

  const getClosedOrdersRevenue = () => {
    getAllClosedOrders().then((revenue) => setClosedOrdersRevenue(revenue));
  };

  const getAllMoney = () => {
    getAllTotals().then((revenue) => setAllMoney(revenue));
  };

  return (
    <div style={
      { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }
      }>
      <h1 className="page-title">Revenue Page</h1>

      <div className="card-container">
        <div className="card card-hover">
          {closedOrdersRevenue !== null ? (
            <p>Total Revenue from Closed Orders: ${closedOrdersRevenue}</p>
          ) : (
            <p>Click to see what we have made today.</p>
          )}
          <button className="btn btn-outline-secondary" onClick={getClosedOrdersRevenue}>
            Get Revenue from Closed Orders
          </button>
        </div>

        <div className="card card-hover">
          {allMoney !== null ? (
            <p>Total Revenue from All Orders: ${allMoney}</p>
          ) : (
            <p>Click to see what we were supposed to have made today.</p>
          )}
          <button className="btn btn-outline-secondary" onClick={getAllMoney}>
            Get Revenue from All Orders
          </button>
          <div><p>If these two numbers don't match, then we have a problem.</p></div>
        </div>
      </div>
    </div>
  );
}

export default RevenuePage;