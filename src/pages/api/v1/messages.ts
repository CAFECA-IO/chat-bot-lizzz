import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ILiteMessage } from '../../../interfaces/message';

type RequestData = {
  messages: ILiteMessage[];
};

type ResponseData = {
  id: number;
  content: string;
  createdTime: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    // InFo: Extract data from the request body (20240102 - Liz)
    const requestData: RequestData = req.body;

    // InFo: Add code to call the chatbot API (20240102 - Liz)
    const apiKey = process.env.OPENAI_API_KEY;
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const aiModel = 'gpt-3.5-turbo';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };
    const requestBody = {
      model: aiModel,
      messages: requestData.messages,
    };
    try {
      const response = await axios.post(apiUrl, requestBody, { headers });

      // InFo: deal with response (20240111 - Liz)
      const randomNum = Math.random();
      const createdTime = Date.now();
      const result: ResponseData = {
        id: randomNum,
        content: response.data.choices[0].message.content,
        createdTime,
      };
      res.status(200).json(result);
    } catch (error) {
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
}
