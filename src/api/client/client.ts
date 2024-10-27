import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://my-notes-infoeste-126fd36f6de4.herokuapp.com/',
});
