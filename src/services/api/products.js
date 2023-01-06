import axios from 'axios';
import endPoints from '@services/api';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*', //Permite cualquier petición
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.addProducts, body, config);
  return response.data; //data contiene la respuesta del servidor
};

const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};

const updateProduct = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*', //Permite cualquier petición
      'Content-Type': 'application/json',
    },
  };
  //console.log(body);
  try {
    const response = await axios.put(endPoints.products.updateProducts(id), body, config);
    console.log(`producto actualizado con ${id} actualizado.`);
    return response.data; //data contiene la respuesta del servidor
  } catch (error) {
    console.log(error);
    return error;
  }
  //const response = await axios.put(endPoints.products.updateProducts(id), body);
};

export { addProduct, deleteProduct, updateProduct };
