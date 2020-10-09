import React from 'react';
import { getMessage } from './service'

function App() {
  const value = getMessage();
  return <div>Hello {value}</div>;
}

export default App;
