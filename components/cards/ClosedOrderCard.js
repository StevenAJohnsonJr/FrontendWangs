/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import { deleteOrder } from '../../ApiCalls/OrderApiCalls';

function ClosedOrderCard({ OrderObj }) {
  const [clickCount, setClickCount] = useState(0);
  const [status, setStatus] = useState('Not Started');

  const handleClick = () => {
    let newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount === 1) {
      setStatus('Not Started');
    } else if (newClickCount === 2) {
      setStatus('In Progress');
    } else if (newClickCount === 3) {
      setStatus('Completed');
    }
  };

  let buttonColor = '';
  if (clickCount === 2) {
    buttonColor = 'yellow';
  } else if (clickCount === 3) {
    buttonColor = 'green';
  }

  const deleteThisOrder = () => {
    if (window.confirm(`Delete ${OrderObj.customerName}?`)) {
      deleteOrder(OrderObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card
      className="e-card e-card-3d"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '16rem',
        padding: '16px', // Add padding for spacing inside the card
        border: 'none',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        transition: 'box-shadow 0.3s ease-in-out',
        cursor: 'pointer', // Add a pointer cursor for hover effect
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.5)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)')}
    >
      <div className="card-container">
        <h5>Customer's Name: {OrderObj?.customerName}</h5>
        <h5>Order Date: {OrderObj?.orderDateFormatted}</h5>
        <h5>Payment Option: {OrderObj?.paymentsId}</h5>
        <h5>Tip Amount: ${OrderObj?.tip}</h5>
        <h5>Total Amount: ${OrderObj?.totalRev}</h5>
        <button type="button" variant="danger" className="btn btn-outline-secondary" onClick={deleteThisOrder}>
          Delete
        </button>
        <Link href="/revenue/revenuePage" passHref>
          <button variant="primary" className="btn btn-outline-secondary">
            Revenue
          </button>
        </Link>
      </div>
    </Card>
  );
}

ClosedOrderCard.propTypes = {
  OrderObj: PropTypes.shape({
    orderId: PropTypes.number,
    customerName: PropTypes.string,
    paymentsId: PropTypes.number,
    tip: PropTypes.number,
    totalRev: PropTypes.number,
    orderPrice: PropTypes.number,
    like: PropTypes.bool,
    orderDateFormatted: PropTypes.string,
  }).isRequired,
};

export default ClosedOrderCard;
