import axios from 'axios';

export const getNewsData = async () => {
    try {
        const newsData = await axios.get(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=fcd8ff4c-bf53-4265-ad55-f1677a6c75b9`);
        return newsData.data.response.results;
    }
    catch (error) {
        return error;
    }
}