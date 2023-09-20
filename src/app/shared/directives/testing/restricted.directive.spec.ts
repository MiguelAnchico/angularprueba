import { AppRestricted } from '../restricted.directive';

describe('RestrictedDirective', () => {
  it('should create an instance', () => {
    const directive = new AppRestricted();
    expect(directive).toBeTruthy();
  });
});
