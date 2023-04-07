import axios from 'axios';

export const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

export const getPostsPage = async (pageParam = 1, options = {}) => {
  const res = await api.get(`/posts?_page=${pageParam}&_limit=10`, options);
  return res.data;
};
