import React from 'react';
import CSSReset from 'components/CSSReset';
import SampleData from './sample-data';

export default {
  title: 'CSS Reset',
  component: CSSReset
};

export const sample = () => (
  <React.Fragment>
    <CSSReset />
    <SampleData />
  </React.Fragment>
);

sample.story = {
  name: 'Sample',
};
