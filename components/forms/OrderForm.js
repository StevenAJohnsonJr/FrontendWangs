/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getAllItems } from '../../ApiCalls/ItemApiCalls';
import { createOrder, updateOrder } from '../../ApiCalls/OrderApiCalls';

const initialState = {
  customerName: '',
  orderId: '',
  paymentId: '',

  isOpen: false,
  orderPrice: '',
  totalRev: '',
  tip: 0,
  id: null,
};

function OrderForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getAllItems(user.uid).then(setItems);

    if (obj.id) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
const handleSubmit = (e) => {
  e.preventDefault();
  if (obj.id > 0) {
    updateOrder(formInput)
      .then(() => {
        router.push(`/orders/${obj.id}`);
        console.log(formInput); // Move the console.log here
      });
  } else {
    const payload = { ...formInput, uid: user.uid };
    console.log(payload); // Keep the console.log here
    createOrder(payload);
  }
};


  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Order</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Please Enter New Customer's Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="CustomerName"
          name="customerName"
          value={formInput.customerName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Please Enter Correct OrderId #" className="mb-3">
        <Form.Control
          type="text"
          placeholder="OrderId"
          name="orderId"
          value={formInput.orderId}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* PRICE INPUT  */}
       <FloatingLabel controlId="floatingInput3" label="Enter Payment Method#" className="mb-3">
        <Form.Control
          type="number"
          placeholder="PaymentId"
          name="paymentId"
          value={formInput.paymentId}
          onChange={handleChange}
        //   required
        />
      </FloatingLabel> 

      <FloatingLabel controlId="floatingInput3" label="Order Price" className="mb-3">
        <Form.Control
          type="number"
          placeholder="OrderPrice"
          name="orderPrice"
          value={formInput.orderPrice}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Order Tip" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Tip"
          name="tip"
          value={formInput.tip}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Total For this Order" className="mb-3">
        <Form.Control
          type="number"
          placeholder="totalRev"
          name="totalRev"
          value={formInput.totalRev}
          onChange={handleChange}
        />
      </FloatingLabel>

      <Form.Check
        type="switch"
        id="custom-switch"
        label="Check this switch"
        onChange={() => {
          // eslint-disable-next-line no-param-reassign
          obj.isOpen = !obj.isOpen;
          console.log(obj.isOpen);
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Order</Button>
    </Form>
  );
}

OrderForm.propTypes = {
  obj: PropTypes.shape({
    customerName: PropTypes.string,
    orderId: PropTypes.number,
    // orderDate: PropTypes.string,
    isOpen: PropTypes.bool,
    orderPrice: PropTypes.number,
    paymentId: PropTypes.string,
    like: PropTypes.bool,
    tip: PropTypes.number,
    totalRev: PropTypes.number,
    id: PropTypes.number,
  }),
};

OrderForm.defaultProps = {
  obj: initialState,
};

export default OrderForm;
