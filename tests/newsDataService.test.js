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
            expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/mockApiResponse`);

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