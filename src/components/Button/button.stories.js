import React from 'react';
import Button from 'components/Button';

export default {
  title: 'Button',
};

export const withText = () => <Button onClick={() => alert('Clicked!')}>Hello Button</Button>;

withText.story = {
  name: 'with text',
};
