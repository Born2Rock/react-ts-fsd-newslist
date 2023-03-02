import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      value: 'tab 1',
      content: '<p>tab 1</p>',
    },
    {
      value: 'tab 2',
      content: '<p>tab 2</p>',
    },
    {
      value: 'tab 3',
      content: '<p>tab 3</p>',
    },
  ],
  value: 'tab 2',
  onTabClick: action('onTabClick'),
};
Primary.decorators = [StoreDecorator({})];
