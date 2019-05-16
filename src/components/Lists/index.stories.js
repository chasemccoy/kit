import React from 'react'
import { storiesOf } from '@storybook/react'
import { UnorderedList, OrderedList } from 'components/Lists'

const Contents = () => (
  <React.Fragment>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </React.Fragment>
)

storiesOf('List/Unordered', module)
  .add('Default', () => (
    <UnorderedList px={40}>
      <Contents />
    </UnorderedList>
  ))
  .add('Inline', () => (
    <UnorderedList inline>
      <Contents />
    </UnorderedList>
  ))
  .add('Unstyled', () => (
    <UnorderedList unstyled>
      <Contents />
    </UnorderedList>
  ))

storiesOf('List/Ordered', module)
  .add('Default', () => (
    <OrderedList px={40}>
      <Contents />
    </OrderedList>
  ))