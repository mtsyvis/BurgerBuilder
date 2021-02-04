import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-buurger-default-rtdb.firebaseio.com/'
});

export default instance;