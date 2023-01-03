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

export { addProduct, deleteProduct };
