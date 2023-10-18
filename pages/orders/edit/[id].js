/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getOrdersById } from '../../../ApiCalls/OrderApiCalls';
import OrderForm from '../../../components/forms/OrderForm';

export default function EditCruise() {
  const [editOrder, setEditOrder] = useState({});
  const router = useRouter();
  // TODO: grab the id
  const { id } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getOrdersById(id).then(x => setEditOrder(x));
  }, [id]);
  // TODO: pass object to form
  return (<OrderForm obj={editOrder} />);
}