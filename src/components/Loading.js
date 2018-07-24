import React from 'react';
import './Loading.css';

// From: https://loading.io/css/
const Loading = () => (
  <div className='loading'>
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
);

export { Loading };
