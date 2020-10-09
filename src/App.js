import React, { useState } from 'react';
import { getMessage } from './service'
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState([]);
  getMessage().then(res => setMessage(res.text));
  return <div>Hello {message}</div>;
}

export default App;
