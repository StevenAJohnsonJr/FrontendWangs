/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column', // Lay out elements vertically
  width: '16rem',
  marginBottom: '1.5rem', // Add margin to the bottom of each card
  border: 'none', // Remove the default card border
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', // Apply a box shadow for the 3D effect
  transition: 'box-shadow 0.3s ease-in-out', // Add a transition for the shadow
  height: '100%', // Set a fixed height for consistent card size
  position: 'relative', // Allow absolute positioning within the card
};

const orderIdStyle = {
  position: 'absolute',
  top: '10px', // Adjust top position for the desired distance from the top
  right: '10px', // Adjust right position for the desired distance from the right
  fontSize: '20px', // Increase font size
  fontWeight: 'bold', // Apply bold style
};

function ItemCard({ ItemObj }) {
  return (
    <Card className="e-card e-card-3d" style={cardStyle}>
      <div style={orderIdStyle}>{ItemObj?.orderId}</div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h5>{ItemObj?.itemName}</h5>
        <h5>{ItemObj?.itemDescription}</h5>
        <h5>{ItemObj?.price}</h5>
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




