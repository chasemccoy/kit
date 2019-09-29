import React from 'react'
import { OrderedList } from 'components/Lists'

const Contents = () => (
  <React.Fragment>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </React.Fragment>
)

export default {
  title: 'Lists/OrderedList',
  component: OrderedList
};

export const Default = () => (
  <OrderedList px={40}>
    <Contents />
  </OrderedList>
);