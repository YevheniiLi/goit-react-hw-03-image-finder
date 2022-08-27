import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/'

export const addGallery = async values => {
    const response = await axios.post('/gallery', values)
    return response.data;
}