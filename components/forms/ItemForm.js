/* eslint-disable */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createItem, getAllItems } from '../../ApiCalls/ItemApiCalls.js';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  itemName: '',
  itemDescription: '',
  price: '',
  orderId: '',
  id: null,
};

function ItemForm({ itemObj, orderId }) {
  const [items, setItems] = useState([]);
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getAllItems(user.uid).then(setItems);

    if (itemObj.id) setFormInput(itemObj);
  }, [itemObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(items);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemObj > 0) {
      updateItem(formInput)
        .then(() => router.push(`/items/${itemObj.id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      console.log(payload);
      createItem(payload);
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
    <FloatingLabel controlId="floatingInput1" label="Please Enter New Menu Item Name" className="mb-3">
  <Form.Control
    type="text"
    placeholder="Please Enter New Menu Item Name"
    name="itemName" // Change to lowercase "itemName"
    value={formInput.itemName}
    onChange={handleChange}
    required
  />
</FloatingLabel>

<FloatingLabel controlId="floatingInput1" label="Please Enter New Item Description" className="mb-3">
  <Form.Control
    type="text"
    placeholder="Please Enter New Item Description"
    name="itemDescription" // Change to lowercase "itemDescription"
    value={formInput.itemDescription}
    onChange={handleChange}
    required
  />
</FloatingLabel>

<FloatingLabel controlId="floatingInput1" label="Please Enter New Item Price" className="mb-3">
  <Form.Control
    type="text"
    placeholder="Please Enter New Item Price"
    name="price" // Change to lowercase "price"
    value={formInput.price}
    onChange={handleChange}
    required
  />
</FloatingLabel>

<FloatingLabel controlId="floatingInput1" label="Please Enter Correct OrderId For this Item" className="mb-3">
  <Form.Control
    type="text"
    placeholder="Please Enter New Item Price"
    name="orderId" // Change to lowercase "price"
    value={formInput.orderId}
    onChange={handleChange}
    required
  />
</FloatingLabel>

    <div>
    <Button type="submit" variant="outline-warning" style={{ marginBottom: '30px' }}>{orderId ? 'Update' : 'Create'} Your Menu Item</Button>
    </div>
  </Form>
  );
}


ItemForm.propTypes = {
  itemObj: PropTypes.shape({
    itemNameame: PropTypes.string,
    itemDescriptionescription: PropTypes.string,
    price: PropTypes.string,
    orderId: PropTypes.number,
    id: PropTypes.number,
  }),
  // eslint-disable-next-line react/require-default-props
  orderId: PropTypes.number,
  // userId: PropTypes.number,

};

ItemForm.defaultProps = {
  itemObj: initialState,
  // eslint-disable-next-line react/default-props-match-prop-types
  // postId: PropTypes.number,
  // userId: PropTypes.number,
};


export default ItemForm;