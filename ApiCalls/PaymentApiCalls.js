import { clientCredentials } from "../utils/client";

const endpoint = clientCredentials.databaseURL;
 
//   const getAllPayments = () => new Promise((resolve, reject) => {
//     fetch(`${endpoint}/payment`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     })
//       .then((response) => resolve(response.json()))
//       .then((data) => resolve(Object.values(data)))
//       .catch(reject);
//   });

const getAllPayments = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/payment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        reject(`Failed to fetch data. Status: ${response.status}`);
      }
    })
    .then((data) => {
      const paymentArray = Object.values(data);
      resolve(paymentArray);
    })
    .catch((error) => {
      reject(error);
    });
  });
  

  const getPaymentsById = (id) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/payment/${id}`, {
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
    getPaymentsById,
    getAllPayments,
    
  };