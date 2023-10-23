import { Test, TestingModule } from '@nestjs/testing';
import { ConfigerService } from './configer.service';

describe('ConfigerService', () => {
  let service: ConfigerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigerService],
    }).compile();

    service = module.get<ConfigerService>(ConfigerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
