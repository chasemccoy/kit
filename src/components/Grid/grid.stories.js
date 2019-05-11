import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from 'components/Grid'
import Box from 'components/Box'
import Text from 'components/Text'

const Contents = () => (
  <React.Fragment>
    <Box width={1/2}>
      <Text.p bg='tomato' p={40}>First Box</Text.p>
    </Box>

    <Box width={1/2}>
      <Text.p bg='dodgerBlue' p={40}>Second Box</Text.p>
    </Box>

    <Box width={1/3}>
      <Text.p bg='dodgerBlue' p={40}>Third Box</Text.p>
    </Box>

    <Box width={2/3}>
      <Text.p bg='tomato' p={40}>Fourth Box</Text.p>
    </Box>
  </React.Fragment>
)

storiesOf('Grid', module)
  .add('Default', () => (
    <Grid color='white'>
      <Contents />
    </Grid>
  ))
  .add('Custom gutter', () => (
    <Grid gutter={4} color='white'>
      <Contents />
    </Grid>
  ))