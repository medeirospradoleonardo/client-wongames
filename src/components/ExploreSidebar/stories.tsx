import { Story, Meta } from '@storybook/react'
import ExploreSidebar from '.'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <ExploreSidebar />
