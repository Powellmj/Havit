import axios from 'axios';

export const createHabit = habit => {
  return axios.post('/habits/', habit);
};

export const createManyHabits = habit => {
  return axios.post('/habits/index/', habit);
};

export const updateHabit = habit => {
  return axios.patch('/habits/update', habit);
};

export const updateManyHabits = habitObj => {
  return axios.patch('/habits/index', habitObj);
};

export const fetchAllHabits = () => {
  return axios.get(`/habits/index/`);
};

export const fetchHabit = habitId => {
  return axios.get(`/habits/show/${habitId}`);
};

export const deleteHabit = habitId => {
  return axios.delete(`/habits/${habitId}`);
};