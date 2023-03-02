import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: 'Moscow',
  username: 'admin213',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('Editing mode should be enabled', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );
  });
  test('Editing mode should be canceled', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    // await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    // await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
    // expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    );

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
    // expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
  });

  test('Error shoul apper', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Text'),
    ).toBeInTheDocument();
  });

  test('Should send put if no error', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Text'),
    ).toBeInTheDocument();

    expect(mockPutReq).toHaveBeenCalled();
  });
});
