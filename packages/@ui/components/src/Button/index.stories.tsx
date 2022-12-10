import { Button } from "."

export default {
  title: 'Button',
  component: Button,
  args: {
    variant: 'default',
    size: 's',
  },
}

export const DefaultStory = (args: any) => (
  <Button {...args} onClick={() => {}}>
    Button1111
  </Button>
)