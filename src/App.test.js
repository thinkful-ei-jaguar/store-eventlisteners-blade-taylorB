import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const main = document.createElement('main');

  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App />, main);

  //clean up code
  ReactDOM.unmountComponentAtNode(main);
});

