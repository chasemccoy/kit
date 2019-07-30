import React from 'react'
import { storiesOf } from '@storybook/react'
import CSSReset from 'components/CSSReset'
import SampleData from './sample-data'

storiesOf('CSS Reset', module)
  .add('Sample', () => (
    <React.Fragment>
      <CSSReset />
      <SampleData />
    </React.Fragment>
  ))