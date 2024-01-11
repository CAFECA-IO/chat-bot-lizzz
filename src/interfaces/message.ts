export interface IMessage {
  id: number;
  content: string;
  role: string;
  createdTime: number;
}

export interface ILiteMessage {
  content: string;
  role: string;
}
