import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type RequestData = {
  userInput: string;
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
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };
    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: requestData.userInput }],
    };
    try {
      const response = await axios.post(apiUrl, requestBody, { headers });
      const id = Math.random();
      const createdTime = Date.now();
      const result: ResponseData = {
        id,
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
