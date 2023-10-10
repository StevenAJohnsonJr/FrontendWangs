/* eslint-disable */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createItem } from '../../ApiCalls/ItemApiCalls.js';


function ItemForm({ }) {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
    };
    console.warn('my payload', payload);
    createItem(payload);
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Please Enter New Item Name</Form.Label>
        <Form.Control as="textarea" name="ItemName" required placeholder="" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>Please Enter New Item Description </Form.Label>
        <Form.Control as="textarea" name="ItemDescription" required placeholder="" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>Please Enter A New Price For Item</Form.Label>
        <Form.Control as="textarea" name="Price" required placeholder="" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>Please Enter A New OrderId # For This Item</Form.Label>
        <Form.Control as="textarea" name="OrderId" required placeholder="" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
     </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ItemForm;