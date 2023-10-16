/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { createOrder } from '../../ApiCalls/OrderApiCalls';
import { getAllItems } from '../../ApiCalls/ItemApiCalls';
import { getAllPayments } from '../../ApiCalls/PaymentApiCalls';

function OrderForm() {
  const [formData, setFormData] = useState({});
  const [itemList, setItemList] = useState([]);
  const [paymentList, setPaymentList] = useState([]);

  useEffect(() => {
    getAllPayments().then((data) => setPaymentList(data));
  }, []);
  console.warn(paymentList);

  useEffect(() => {
    getAllItems().then((data) => setItemList(data));
  }, []);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...formData };
        createOrder(payload);
    };

    if (itemList === null) {
        return <div>Loading...</div>;
    }

    if (paymentList === null) {
        return <div>Loading...</div>;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Enter Customer's Full Name">
                <Form.Control type="textarea" name="CustomerName" required onChange={handleChange} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Per Today's Date">
                <Form.Control type="textarea" name="OrderDate" required onChange={handleChange} />
            </FloatingLabel>
            <Form.Select
                aria-label="Item"
                name="itemName"
                onChange={handleChange}
                className="mb-3"
                value={formData.itemName}
                required
            >
                <option value="ItemName" key="ItemName">
                    Select an Item
                </option>
                {itemList.map((item) => (
                    <option key={item.id} value={item.itemName}>
                        {item.itemName}
                    </option>
                ))}
            </Form.Select>
            <FloatingLabel controlId="floatingInput" label="Please Enter HP&W Meal #">
                <Form.Control type="textarea" name="OrderId" required onChange={handleChange} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="The Cost For This Meal">
                <Form.Control type="textarea" name="OrderPrice" required onChange={handleChange} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Tip Amount">
                <Form.Control type="textarea" name="Tip" required onChange={handleChange} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Total For This Order">
                <Form.Control type="textarea" name="TotalRev" required onChange={handleChange} />
            </FloatingLabel>

            <Form.Select
                aria-label="Payment"
                name="paymentMethod"  // Corrected typo here
                onChange={handleChange}
                className="mb-3"
                value={formData.paymentMethod}
                required
            >
                <option value="PaymentMethod" key="PaymentMethod">
                    Select a Payment Method
                </option>
                {paymentList.map((payment) => (
                    <option key={payment.id} value={payment.paymentMethod}>
                        {payment.paymentMethod}
                    </option>
                ))}
            </Form.Select>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default OrderForm;

