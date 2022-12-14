import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import { Button, type Props } from ".";

export default {
  title: 'Button',
  component: Button,
  args: {
    variant: 'default',
    size: 's',
    disabled: false,
  },
} as Meta<typeof Button>;

export const DefaultStory: Story<Props> = (args) => (
  <Button {...args} onClick={action('click')}>
    Button
  </Button>
)