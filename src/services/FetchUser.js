import axios from 'axios';
export const getUserInfo = async name => {
  let username = name.toLowerCase().trim();
  const URL = `https://api.github.com/users/${username}`;
  const promise = await axios.get(URL);
  return promise;
};
