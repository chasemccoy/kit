import React from 'react';
import Grid from 'components/Grid';
import Box from 'components/Box';
import Text from 'components/Text';

const Contents = () => (
  <React.Fragment>
    <Box width={1 / 2}>
      <Text.p bg="tomato" p={40}>
        First Box
      </Text.p>
    </Box>

    <Box width={1 / 2}>
      <Text.p bg="dodgerBlue" p={40}>
        Second Box
      </Text.p>
    </Box>

    <Box width={1 / 3}>
      <Text.p bg="dodgerBlue" p={40}>
        Third Box
      </Text.p>
    </Box>

    <Box width={2 / 3}>
      <Text.p bg="tomato" p={40}>
        Fourth Box
      </Text.p>
    </Box>
  </React.Fragment>
);

export default {
  title: 'Grid',
  component: Grid
};

export const defaultStory = () => (
  <Grid color="white">
    <Contents />
  </Grid>
);

defaultStory.story = {
  name: 'Default',
};

export const customGutter = () => (
  <Grid gutter={4} color="white">
    <Contents />
  </Grid>
);

customGutter.story = {
  name: 'Custom gutter',
};

export const responsive = () => (
  <Grid color="white">
    <Box width={[1, 1 / 2, 1, 1 / 2]}>
      <Text.p bg="tomato" p={40}>
        First Box
      </Text.p>
    </Box>

    <Box width={[1, 1 / 2, 1, 1 / 2]}>
      <Text.p bg="dodgerBlue" p={40}>
        Second Box
      </Text.p>
    </Box>

    <Box width={[1, 1 / 2, 1, 1 / 2]}>
      <Text.p bg="tomato" p={40}>
        Third Box
      </Text.p>
    </Box>
  </Grid>
);

responsive.story = {
  name: 'Responsive',
};
