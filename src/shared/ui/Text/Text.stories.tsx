import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, tenetur!',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  size: TextSize.L,
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, tenetur!',
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, tenetur!',
  theme: TextTheme.ERROR,
};

export const OnlyHeader = Template.bind({});
OnlyHeader.args = {
  title: 'Lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, tenetur!',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, tenetur!',
  // theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
