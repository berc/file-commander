import { FileCommanderModule } from './file-commander.module';

describe('FileCommanderModule', () => {
  let fileCommanderModule: FileCommanderModule;

  beforeEach(() => {
    fileCommanderModule = new FileCommanderModule();
  });

  it('should create an instance', () => {
    expect(fileCommanderModule).toBeTruthy();
  });
});
