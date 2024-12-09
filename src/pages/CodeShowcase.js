import React from 'react';
import { usePasswordGenerator } from '../hooks/usePasswordGenerator';
import '../styling/CodeShowcase.css'

function CodeShowcase() {
  // Initializing the password generator function from the hook
  const {
    includeAlphabets,
    setIncludeAlphabets,
    includeNumbers,
    setIncludeNumbers,
    includeSpecial,
    setIncludeSpecial,
    passwordLength,
    setPasswordLength,
    password,
    generatePassword,
    clearPassword,
    error,
  } = usePasswordGenerator();

  return <div className='showcaseArea'>
    <h1>Code Showcase</h1>
    <hr />
    <p className='showcaseTextInfo'>Explore a showcase of my front-end and 
    back-end development expertise through this random password generator. 
    Customize your password by selecting specific criteria, and effortlessly 
    generate a randomized password!</p>
    <div className='passwordGenerator'>
      <h2>Random Password Generator</h2>
      <div className='passwordOptions'>
        <label>
          <input
          type='checkbox'
          checked={includeAlphabets}
          onChange={(e) => setIncludeAlphabets(e.target.checked)}/> Include Alphabets
        </label>
        <label>
          <input
          type='checkbox'
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}/> Include Numbers
        </label>
        <label>
          <input
          type='checkbox'
          checked={includeSpecial}
          onChange={(e) => setIncludeSpecial(e.target.checked)}/> Include Special Characters
        </label>
        <label>Password Length:
          <input type='number' min='4' max='64' value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value, 10))}/>
        </label>
      </div>
      <div className='passwordActions'>
        <button onClick={generatePassword} className='generateBtn'>Generate Password</button>
        <button onClick={clearPassword} className='clearBtn'>Clear Password</button>
      </div>
      {/* Error message and password display area */}
      {error && <p className='errorMessage'>{error}</p>}
      {password && (
        <div className='passwordDisplay'>
          <p>Your password:</p>
          <strong>{password}</strong>
        </div>
      )}
    </div>
  </div>;
}

export default CodeShowcase;