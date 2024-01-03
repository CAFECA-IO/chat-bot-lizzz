// interfaces/IChatGPTResponse.ts

interface IChatGPTResponse {
  choices: {
    finish_reason: string;
    index: number;
    message: {
      content: string;
      role: string;
    };
    logprobs: null | unknown; // You might need to adjust this based on the actual type
  }[];
  created: number;
  id: string;
  model: string;
  object: string;
  usage: {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
  };
}

export default IChatGPTResponse;
