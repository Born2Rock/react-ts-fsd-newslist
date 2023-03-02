import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileValidationErrors.test', () => {
  test('should return Error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.NO_DATA,
          ValidateProfileError.SERVER_ERROR,
        ],
      },
    };
    expect(getProfileValidationErrors(state as StateSchema)).toEqual([
      ValidateProfileError.NO_DATA,
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
  });
});
