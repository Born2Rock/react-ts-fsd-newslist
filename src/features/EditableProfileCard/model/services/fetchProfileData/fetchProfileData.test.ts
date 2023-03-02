import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');

const data = {
  first: 'test',
  lastname: 'test',
  age: 'test',
  currency: Currency.EUR,
  country: Country.Kazakhstan,
  city: 'test',
  username: 'test',
};

describe('fetchProfileData.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
