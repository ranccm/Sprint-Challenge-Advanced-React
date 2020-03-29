import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('renders the app header', () => {
  const{ getByText } = render(<App />);

  const header = getByText('a list of women in the world cup');

  expect(header).toBeInTheDocument();
});
