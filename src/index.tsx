import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Hello: React.SFC = () => (
  <h1>Hello, World!</h1>
);

ReactDOM.render(
  <Hello />,
  document.getElementById('app'),
);
