/* eslint-disable */
import React, { useState } from 'react'; // Import useState
import PropTypes from 'prop-types';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import { deleteOrder } from '../../ApiCalls/OrderApiCalls';

function OrderCard({ OrderObj }) {

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
    <Card className="e-card e-card-3d" style={{
      display: 'flex',
      flexDirection: 'column',
      width: '16rem',
      height: '100%',
      // margin: '20%',
      marginBottom: '1.5px',
      border: 'none', // Remove the default card border
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', // Apply a box shadow for the 3D effect
      transition: 'box-shadow 0.3s ease-in-out', // Add a transition for the shadow
    }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.5)'} // Shadow effect on hover
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)'} // Reset shadow on mouse leave
    >
      <div>
        <h5>Customer's Name: {OrderObj?.customerName}</h5>
        <h5>Customer's Name: {OrderObj?.orderDateFormatted}</h5>
        <h5>Meal Number : {OrderObj?.orderId}</h5>
        <h5>Payment Option: {OrderObj?.paymentsId}</h5>
        <h5>Tip Amount: ${OrderObj?.tip}</h5>
        <h5>Ready to be processed{OrderObj?.like ? <span>👍</span> : null}</h5>
        <button type="button" variant="danger" className="btn btn-outline-secondary" onClick={deleteThisOrder}>
          Delete
        </button>
        <Link href={`/orders/${OrderObj.id}`} passHref>
          <button variant="primary" className="btn btn-outline-secondary">
            Details
          </button>
        </Link>
        <Link href={`/api/OrdersbyID/${OrderObj.id}`} passHref>
        <button variant="primary" className="btn btn-outline-secondary">Edit</button>
        </Link>
        <button type="button" className="btn btn-outline-secondary" style={{ backgroundColor: buttonColor }} onClick={handleClick}>
          {status}
        </button>
      </div>
    </Card>
  );
}

OrderCard.propTypes = {
  OrderObj: PropTypes.shape({
    orderId: PropTypes.number,
    customerName: PropTypes.string,
    paymentsId: PropTypes.number,
    tip: PropTypes.number,
    like: PropTypes.bool,
    orderDateFormatted: PropTypes.string,
  }).isRequired,
};

export default OrderCard;


