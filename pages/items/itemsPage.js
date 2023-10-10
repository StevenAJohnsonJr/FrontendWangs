/* eslint-disable */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllItems } from '../../ApiCalls/ItemApiCalls';
import ItemCard from '../../components/cards/ItemCard';


function ItemPage() {
  const [items, setItems] = useState([]);
  const getTheCategeories = () => {
    getAllItems().then(setItems);
  };
  useEffect(() => {
    getTheCategeories();
    console.warn(items)
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
        <h1>All Menu Items</h1>
      </div>
      <div className="flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {items?.map((item) => (
          <ItemCard ItemObj={item} />))}
      </div>
    </>
  );
}
export default ItemPage;