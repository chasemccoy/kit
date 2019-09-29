import React from 'react'
import { UnorderedList } from 'components/Lists'

const Contents = () => (
  <React.Fragment>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </React.Fragment>
)

export default {
  title: 'Lists/UnorderedList',
  component: UnorderedList
};

export const Default = () => (
  <UnorderedList px={40}>
    <Contents />
  </UnorderedList>
);

export const Inline = () => (
  <UnorderedList inline>
    <Contents />
  </UnorderedList>
);

export const Unstyled = () => (
  <UnorderedList unstyled>
    <Contents />
  </UnorderedList>
);