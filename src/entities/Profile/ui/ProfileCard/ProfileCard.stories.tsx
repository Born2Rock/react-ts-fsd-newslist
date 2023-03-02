import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
// @ts-ignore
import avatarImg from '@/shared/assets/tests/storybook.webp';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'test',
    lastname: 'test',
    age: 'test',
    currency: Currency.EUR,
    country: Country.Kazakhstan,
    city: 'test',
    username: 'test',
    avatar: avatarImg,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
