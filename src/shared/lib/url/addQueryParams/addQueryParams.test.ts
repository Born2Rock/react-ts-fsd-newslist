import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
  test('should test with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });
  test('should test with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      second: 'value2',
    });
    expect(params).toBe('?test=value&second=value2');
  });
  test('should test with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      second: undefined,
    });
    expect(params).toBe('?test=value');
  });
});
