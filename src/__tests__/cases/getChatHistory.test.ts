import { WhatsAppService } from '../../core/services/WhatsAppService';
import { config } from '../../core/config/env';
import { runSafe } from '../utils/runSafe';

const service = new WhatsAppService();

describe('GetChatHistory API', () => {
    it('should include expected fields in message object', async () => {
        await runSafe(async () => {
          const res = await service.getChatHistory(config.chatId, 1);
          const msg = res.data[0];
      
          expect(msg).toMatchObject({
            idMessage: expect.any(String),
            type: expect.any(String),
            typeMessage: expect.any(String),
            chatId: expect.any(String),
            timestamp: expect.any(Number)
          });
      
          if (msg.type === 'incoming') {
            expect(msg).toHaveProperty('senderId');
            expect(msg).toHaveProperty('senderName');
          }
        }, 'Chat history fields');
      });      
});
