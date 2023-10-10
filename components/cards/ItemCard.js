/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ItemCard({ ItemObj }) {
  return (
    <Card className="e-card e-card-horizontal" style={
        { display: 'flex', flexDirection: 'row', width: '14rem', height: '100%', marginBottom: '1.5px' }
        }>
      <div>
        <h5>{ItemObj?.itemName}</h5>
        <h5>{ItemObj?.itemDescription}</h5>
        <h5>{ItemObj?.price}</h5>
        <h5>{ItemObj?.orderId}</h5>
      </div>
     </Card>
  );
}

ItemCard.propTypes = {
  ItemObj: PropTypes.shape({
    itemName: PropTypes.string,
    itemDescription: PropTypes.string,
    price: PropTypes.string,
    orderId: PropTypes.number,
  }).isRequired,
};

export default ItemCard;