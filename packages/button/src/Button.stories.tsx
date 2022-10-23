import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonProps } from "./";

export default {
  title: "Button",
  component: Button,
  args: {
    size: "normal",
    block: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: "Normal Button",
} as ButtonProps;

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  size: "large",
} as ButtonProps;

export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  size: "small",
} as ButtonProps;
