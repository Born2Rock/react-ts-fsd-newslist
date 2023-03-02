import { loginReducer, LoginSchema } from '@/features/AuthByUsername';
import { loginActions } from '@/features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('123123')),
    ).toEqual({ username: '123123' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('123123')),
    ).toEqual({ password: '123123' });
  });

  // test('test set isLoading', () => {
  //   const state: DeepPartial<LoginSchema> = { isLoading: false };
  //   expect(loginReducer(
  //     state as LoginSchema,
  //     loginByUsername(true),
  //   )).toBe({ password: '123123' });
  // });
  // test('test set error', () => {
  // });
});
