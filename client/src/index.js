import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sign from './sign/Sign.js';
// import App2 from './App2';
// import SignIn from './SignIn'
// import SignUp from './SignUp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SignUp/>
    <SignIn/>
    <App2 />
    <App/> =
  */}
  <Sign/>
  </React.StrictMode>
);


