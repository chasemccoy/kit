import React from 'react'
import { UnorderedList, OrderedList } from 'components/Lists'

const Contents = () => (
  <React.Fragment>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </React.Fragment>
)

export default {
  title: 'Lists',
};

export const unorderedDefault = () => (
    <UnorderedList px={40}>
      <Contents />
    </UnorderedList>
  );

unorderedDefault.story = {
  name: 'Unordered/Default',
};

export const inline = () => (
    <UnorderedList inline>
      <Contents />
    </UnorderedList>
  );

inline.story = {
  name: 'Unordered/Inline',
};

export const unstyled = () => (
    <UnorderedList unstyled>
      <Contents />
    </UnorderedList>
  );

unstyled.story = {
  name: 'Unordered/Unstyled',
};

export const orderedDefault = () => (
    <OrderedList px={40}>
      <Contents />
    </OrderedList>
  );

orderedDefault.story = {
  name: 'Ordered/Default',
};