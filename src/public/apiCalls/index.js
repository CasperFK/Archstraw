import { URL, login, newDay, newEmployess, getEmployee, newEmployeeFromSelect, updateState } from '../constants';

export const sendLoginData = (form) =>
  fetch(`${URL}/${login}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.access_token) {
        localStorage.setItem('authToken', res.access_token);
        localStorage.setItem('refreshToken', res.refresh_token);
      }
      return res;
    })
    .catch((error) => console.error('Error:', error));

export const sendNewDay = (form) =>
  fetch(`${URL}/${newDay}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    },
    body: JSON.stringify(form),
  }).catch((err) => console.error(err));

export const sendNewEmployess = (form) =>
  fetch(`${URL}/${newEmployess}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    },
    body: JSON.stringify(form),
  })
    .then(res => res.json())
    .catch((err) => console.error(err));

export const sendNewEmployeeFromSelect = (form) =>
  fetch(`${URL}/${newEmployeeFromSelect}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    },
    body: JSON.stringify(form),
  })
    .then(res => res.json())
    .catch((err) => console.error(err));

export const getListOfEmployee = () =>
  fetch(`${URL}/${getEmployee}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    },
  })
    .then(res => res.json());

export const updateStateForEmployee = (fields) =>
  fetch(`${URL}/${updateState}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    },
    body: JSON.stringify(fields),
  });

