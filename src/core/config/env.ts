import dotenv from 'dotenv';
dotenv.config();

export const config = {
  apiUrl: process.env.API_URL!,
  instanceId: process.env.INSTANCE_ID!,
  token: process.env.API_TOKEN!,
  chatId: process.env.CHAT_ID!
};
