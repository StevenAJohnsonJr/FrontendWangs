import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getItemsById } from '../../../ApiCalls/ItemApiCalls';
import ItemForm from '../../../components/forms/ItemForm';

export default function EditCruise() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the id
  const { id } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getItemsById(id).then(setEditItem);
  }, [id]);

  // TODO: pass object to form
  return (<ItemForm obj={editItem} />);
}
