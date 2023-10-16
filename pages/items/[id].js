/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getItemsById2 } from '../../ApiCalls/ItemApiCalls';

export default function itemDetails() {
  const router = useRouter();
  const [itemDetails, setItemDetails] = useState({});

  // TODO: grab firebaseKey from url
  const { id } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    getItemsById2 (id).then(setItemDetails);
    console.warn('my item', itemDetails);
  }, [id]);

  return (
    <div>
      <div className="body2" class="c2">
        <div className="body2" class="c2">
          <div class="b2">
            <span></span>
            <div class="c3">
              <h1>WhAt'S oN tHe MeNu!!!</h1> {itemDetails.itemName} has a price of ${itemDetails.price}.<p style={{ marginButton: '100px' }}>The OrderId number to enter in the OrderForm is {itemDetails.orderId}.</p>
              <p>
                {' '}
                If the customer wants to order now press this Button<Link href="/orders/new" passHref><button variant="primary" className="m-2">Form</button></Link>
                </p>
              <h5></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
