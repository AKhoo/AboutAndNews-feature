import React from 'react';
import App from './client/components/App.jsx';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

