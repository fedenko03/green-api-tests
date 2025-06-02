import { AxiosResponse } from 'axios';

export interface IWhatsAppService {
  sendMessage(chatId: string, message: string): Promise<AxiosResponse>;
  getChatHistory(chatId: string, count: number): Promise<AxiosResponse>;
  getInstanceState(): Promise<AxiosResponse>;
}
