import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return Error', () => {
    const data = {
      first: 'test',
      lastname: 'test',
      age: 'test',
      currency: Currency.EUR,
      country: Country.Kazakhstan,
      city: 'test',
      username: 'test',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
