import { WhatsAppService } from '../../core/services/WhatsAppService';
import { config } from '../../core/config/env';
import { runSafe } from '../utils/runSafe';

const service = new WhatsAppService();

describe('SendMessage API - Negative', () => {
  it('should return 400 for empty message', async () => {
    await runSafe(async () => {
      expect.assertions(1);
      try {
        await service.sendMessage(config.chatId, '');
      } catch (e: any) {
        expect(e.response.status).toBe(400);
      }
    }, 'Send empty message');
  });
});
