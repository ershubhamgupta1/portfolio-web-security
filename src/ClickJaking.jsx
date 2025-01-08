import React from 'react'

const ClickJaking = () => {
    const currentUrl = new URL(window.location.href); // Get the current URL
    console.log('currentUrl======>>>>', currentUrl.href);
    const handleButtonClick = () => {
        console.log('enter in button click');
        alert("Button clicked! Sensitive action performed.");
    };
    return (
        <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Target Application</h1>
            <p>This button performs a sensitive action.</p>
            <button className='fake-button' id='clickMe' onClick={handleButtonClick}>Click Me</button>
        </div>
    )
}

export default ClickJaking
