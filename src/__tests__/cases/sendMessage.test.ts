import { WhatsAppService } from '../../core/services/WhatsAppService';
import { config } from '../../core/config/env';
import { runSafe } from '../utils/runSafe';

const service = new WhatsAppService();

describe('SendMessage API', () => {
  it('should send a valid message and receive status 200 with idMessage', async () => {
    await runSafe(async () => {
      const res = await service.sendMessage(config.chatId, 'Test message');
      expect(res.status).toBe(200);
      expect(res.data).toHaveProperty('idMessage');
    }, 'Send valid message');
  });
});
