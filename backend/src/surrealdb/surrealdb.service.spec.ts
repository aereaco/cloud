import { Test, TestingModule } from '@nestjs/testing';
import { SurrealdbService } from './surrealdb.service';

describe('SurrealdbService', () => {
  let service: SurrealdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurrealdbService],
    }).compile();

    service = module.get<SurrealdbService>(SurrealdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
