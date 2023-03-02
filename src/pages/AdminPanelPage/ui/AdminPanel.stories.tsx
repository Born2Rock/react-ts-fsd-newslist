import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AdminPanel from './AdminPanelPage';

export default {
  title: 'pages/AdminPanel',
  component: AdminPanel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AdminPanel>;

const Template: ComponentStory<typeof AdminPanel> = (args) => (
  <AdminPanel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
