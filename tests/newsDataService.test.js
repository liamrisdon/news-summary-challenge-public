import axios from 'axios';
import { getNewsData } from "../src/utils/newsDataService";
import mockNewsData from "../mockNewsData.json";

vi.mock(`axios`);

describe('getNews tests', () => {

    describe('GET request tests', () => {

        it('1 - should make an external data call', async () => {

            //Arrange
            axios.get.mockResolvedValueOnce({ data: mockNewsData })
            //Act
            await getNewsData();
            //Assert
            expect(axios.get).toHaveBeenCalledWith(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=fcd8ff4c-bf53-4265-ad55-f1677a6c75b9`);

        });

        it('2 - should be a successful request returning the right data', async () => {

            //Arrange
            axios.get.mockResolvedValueOnce({ data: mockNewsData.mockApiResponse })
            //Act
            const result = await getNewsData();
            //Assert
            expect(result).toEqual(mockNewsData.mockApiResponse.response.results);

        });

        it('3 - should have unsuccessful request returning an error object', async () => {

            //Arrange
            const error = { message: `Error` };
            axios.get.mockRejectedValueOnce(error);
            //Act
            const result = await getNewsData();
            //Assert
            expect(result).toBe(error);

        });
    });
})