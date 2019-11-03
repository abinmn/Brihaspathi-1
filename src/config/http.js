import { rootUrl1, rootUrl2 } from './api';

export const post1 = (url, data) => {
  return fetch(`${rootUrl1}/api${url}`, {
    method: 'POST',
    body: data,
  })
    .then(res => res.json())
    .catch(err => err);
};

export const get1 = url => {
  return fetch(`${rootUrl1}/api${url}`, {
    mode: 'cors',
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(err => console.log(err));
};

export const post2 = (url, data) => {
  return fetch(`${rootUrl2}/api${url}`, {
    method: 'POST',
    body: data,
  })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => err);
};

export const get2 = url => {
  return fetch(`${rootUrl2}/api${url}`, {
    mode: 'cors',
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(err => console.log(err));
};
