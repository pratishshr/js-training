import axios from 'axios';

export function get(url) {
  //data tanne
  return axios({
    method: 'GET',
    url: url
  });
}

export function post(url, data) {
  // naya data create garne
  return axios({
    method: 'POST',
    url: url,
    data: data
  });
}

export function put() {
  // update
}

export function remove() {
  // delete
}