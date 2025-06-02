import { WhatsAppService } from '../../core/services/WhatsAppService';
import { runSafe } from '../utils/runSafe';

const service = new WhatsAppService();

describe('GetInstanceState API', () => {
  it('should return authorized instance state', async () => {
    await runSafe(async () => {
      const res = await service.getInstanceState();
      expect(res.status).toBe(200);
      expect(res.data).toHaveProperty('stateInstance');
    }, 'Get instance state');
  });
});
