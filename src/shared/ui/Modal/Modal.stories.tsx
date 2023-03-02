import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, tenetur!',
  // theme: AppLinkTheme.PRIMARY,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, tenetur!',
  // theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const PrimaryDark = Template.bind({});
// PrimaryDark.args = {
//   // children: 'Text',
//   // theme: AppLinkTheme.PRIMARY,
// };
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
