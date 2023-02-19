import React, { useState } from 'react';
import './Sign.css';

function Sign() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [isWelcome, setIsWelcome] = useState(false);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUpSignInToggle = (event) => {
    event.preventDefault();
    setIsSignUp(!isSignUp);
    setIsWelcome(!isWelcome)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Full Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className='bodies'>
    <div className="form-container">
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <label>
              Full Name:
              <input type="text" value={fullName} onChange={handleFullNameChange} />
            </label>
            <br />
            
          </>
        )}
          {isWelcome && (
          <>
            <label className='welcome'>
             &
            </label>
            <br />
            <label className='welcome'>
               WELCOME BACK
            </label>
            <br />
          </>
        )}

        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <p>
        {isSignUp
          ? 'Already have an account?'
          : 'Don\'t have an account?'}
        {' '}
        <a href="/" onClick={handleSignUpSignInToggle}>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </a>
      </p>
    </div>
    <div>
        <h2 className='quote'>- Mike Butcher</h2>
        <h2 className='quote'>❝Blogging is a conversation, not a code.❞ </h2>
           </div>
    </div>
  );
}

export default Sign;