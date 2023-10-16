import { clientCredentials } from "../utils/client";

const endpoint = clientCredentials.databaseURL;

const createItem = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/item`, {
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
  
  const updateItem = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/item${payload.id}.json`, {
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

  const getAllItems = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/item`, {
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

  const deleteItem = (id) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/item/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

  const getItemsById = (id) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/item/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          reject(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  const getItemsById2 = (id) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/apiitemsbyID/${id}`, {
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
  
  // const getItemsById2 = (id) => {
  //   return new Promise((resolve, reject) => {
  //     fetch(`${endpoint}/api/itemsbyID/${id}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           reject(`Network response was not ok: ${response.status} ${response.statusText}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => resolve(data))
  //       .catch((error) => reject(error));
  //   });
  // };
  

  const getItemsByOrderId = (orderid) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/item/${orderid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

  const checkUser = (uid) => new Promise((resolve, reject) => {
    fetch(`https://localhost:7100/checkuser/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

  export {
    updateItem,
    createItem,
    getItemsByOrderId,
    getAllItems,
    deleteItem,
    getItemsById,
    getItemsById2,
    checkUser,
  };