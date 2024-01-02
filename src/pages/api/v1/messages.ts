import type { NextApiRequest, NextApiResponse } from 'next';

type RequestData = {
  userInput: string;
};

type ResponseData = {
  id: number;
  content: string;
  createdTime: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    // InFo: Extract data from the request body (20240102 - Liz)
    const requestData: RequestData = req.body;

    // InFo: Perform actions based on the userInput (20240102 - Liz)
    // InFo: For simplicity, let's use a predefined response (20240102 - Liz)
    const createdTime = Date.now();
    const result: ResponseData = {
      id: 102,
      content: `Hello, how are you? You said: ${requestData.userInput}`,
      createdTime: createdTime,
    };

    res.status(200).json(result);
  } else {
    res.status(405).end();
  }
}
