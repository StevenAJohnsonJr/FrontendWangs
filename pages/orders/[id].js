/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getOrdersById } from '../../ApiCalls/OrderApiCalls';

export default function orderDetails() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState({});

  // TODO: grab firebaseKey from url
  const { id } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    getOrdersById(id).then(setOrderDetails);
    console.warn('my order', orderDetails)
  }, [id]);

  return (
    <div>
      <div className="body2" class="c2">
        <div className="body2" class="c2">
          <div class="b2">
            <span></span>
            <div class="c3">
              <h1>Order Up!!!</h1> {orderDetails.customerName} has ordered a HP&W #{orderDetails.orderId}
              <p style={{ marginButton: '100px' }}>
                {orderDetails.customerName} will be using payment method #{orderDetails.paymentsId}.
              </p>
              <p style={{ marginButton: '100px' }}>{orderDetails.customerName} has left a tip in the amount of: {orderDetails.tip}</p>
              <h5></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
