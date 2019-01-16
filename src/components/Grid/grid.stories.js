import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from 'components/Grid'
import Box from 'components/Box'
import Text from 'components/Text'

storiesOf('Grid', module)
  .add('two up', () => (
    <Grid>
      <Box width={1/2}>
        <Text.p bg='tomato'>First Box</Text.p>
      </Box>

      <Box width={1/2}>
        <Text.p bg='dodgerBlue'>Second Box</Text.p>
      </Box>
    </Grid>
  ))