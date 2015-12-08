const Header = require('./header');
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <Header url="/api/data" pollInterval={2000} />,
  document.getElementById('content')
);
