import axios from 'axios';
import { config } from '../config/env';

export class WhatsAppService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = `${config.apiUrl}/waInstance${config.instanceId}`;
  }

  sendMessage(chatId: string, message: string) {
    const url = `${this.baseUrl}/sendMessage/${config.token}`;
    const payload = { chatId, message };
    return axios.post(url, payload);
  }

  getChatHistory(chatId: string, count = 10) {
    const url = `${this.baseUrl}/getChatHistory/${config.token}`;
    const payload = { chatId, count };
    return axios.post(url, payload);
  }

  getInstanceState() {
    const url = `${this.baseUrl}/getStateInstance/${config.token}`;
    return axios.get(url);
  }
}
