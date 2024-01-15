// chatGPTService.ts
import axios from 'axios';
import { ILiteMessage } from '../interfaces/message';

const getBotResponse = async (messages: ILiteMessage[]) => {
  const apiUrl = '/api/v1/messages';
  const requestData = { messages };
  const response = await axios.post(apiUrl, requestData);
  const responseData = response.data;
  return responseData;
};

export default getBotResponse;
