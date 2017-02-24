import Header from './header'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Header url="/api/data" />,
  document.getElementById('content')
);
