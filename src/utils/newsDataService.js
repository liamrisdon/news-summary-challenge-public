import axios from 'axios';

export const getNewsData = async () => {
    try {
        const newsData = await axios.get(`http://localhost:3000/mockApiResponse`);
        return newsData.data.response.results;
    }
    catch (error) {
        return error;
    }
}