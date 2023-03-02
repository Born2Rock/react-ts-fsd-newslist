import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
// @ts-ignore
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    profile: {
      form: {
        first: 'test',
        lastname: 'test',
        age: 'test',
        currency: Currency.EUR,
        country: Country.Kazakhstan,
        city: 'test',
        username: 'test',
      },
    },
  }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  // children: 'Text',
  // theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

// Dark.decorators = [ThemeDecorator(Theme.DARK)];
