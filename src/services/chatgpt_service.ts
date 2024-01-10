// chatGPTService.ts
import axios from 'axios';

const getBotResponse = async (userInput: string) => {
  const apiUrl = '/api/v1/messages';
  const requestData = { userInput };
  const response = await axios.post(apiUrl, requestData);
  const responseData = response.data;
  return responseData;
};

export default getBotResponse;
