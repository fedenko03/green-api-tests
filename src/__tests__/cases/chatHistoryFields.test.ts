import { WhatsAppService } from '../../core/services/WhatsAppService';
import { config } from '../../core/config/env';
import { runSafe } from '../utils/runSafe';

const service = new WhatsAppService();

describe('Chat History Structure', () => {
  it('should include expected fields in message object', async () => {
    await runSafe(async () => {
      const res = await service.getChatHistory(config.chatId, 1);
      const msg = res.data[0];
      expect(msg).toHaveProperty('idMessage');
      expect(msg).toHaveProperty('type');
      expect(msg).toHaveProperty('chatId');
      expect(msg).toHaveProperty('timestamp');
    }, 'Chat history fields');
  });
});
