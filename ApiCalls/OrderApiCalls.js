import { clientCredentials } from "../utils/client";

const endpoint = clientCredentials.databaseURL;

const createOrder = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        let data;
        if (res.ok) {
          data = await res.json();
          resolve(data);
        }
      })
      .catch(reject);
  });
  
  const updateOrder = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/order${payload.id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        let data;
        if (res.ok) {
          data = await res.json();
          resolve(data);
        }
      })
      .catch(reject);
  });

  const getAllOrders = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/order`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

  const deleteOrder = (id) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/order/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

  const getOrdersById = (id) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/OrdersbyID/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => resolve(response.json()))
      // .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

  export {
    updateOrder,
    createOrder,
    getOrdersById,
    getAllOrders,
    deleteOrder,
  };