import { Test, TestingModule } from '@nestjs/testing';
import { ClaspsService } from './clasps.service';

describe('ClaspsService', () => {
  let service: ClaspsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaspsService],
    }).compile();

    service = module.get<ClaspsService>(ClaspsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
