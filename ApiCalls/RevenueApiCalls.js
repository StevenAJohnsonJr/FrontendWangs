import { clientCredentials } from "../utils/client";

const endpoint = clientCredentials.databaseURL;

const getAllClosedOrders = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/totalrevenueclosedorders`, {
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

  const getAllTotals = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/totalrevenue`, {
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

  export {
    getAllClosedOrders,
    getAllTotals,
  }