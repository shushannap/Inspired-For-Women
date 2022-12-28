import sendRequest from './send-request';
const BASE_URL = '/api/orders';

export async function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export async function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export async function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

export async function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export async function getAllForUser() {
  return sendRequest(`${BASE_URL}`);
}

export async function deleteOrder(orderId) {
  return sendRequest(`${BASE_URL}/${orderId}`, 'DELETE');
}