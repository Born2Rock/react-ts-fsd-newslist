import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

jest.mock('axios');

const data = {
  first: 'test',
  lastname: 'test',
  age: 33,
  currency: Currency.EUR,
  country: Country.Kazakhstan,
  city: 'test',
  username: 'test',
};

describe('validateProfileData.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success', async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('error name', async () => {
    const result = validateProfileData({ ...data, first: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('error age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
