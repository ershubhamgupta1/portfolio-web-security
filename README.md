# Web Security Vulnerability Demonstrations

This project showcases common web security vulnerabilities, including Cross-Site Scripting (XSS) attacks and Clickjacking, to help developers understand and prevent them.

## Features

### Demonstrated Vulnerabilities
- **XSS (Cross-Site Scripting):**
  - `EvalAttack`: Demonstrates how using `eval()` with untrusted input can lead to security issues.
  - `UrlParamAttack`: Highlights the risks of directly using URL parameters without sanitization.
  - `DangerouslySetInnerHTMLAttack`: Shows how `dangerouslySetInnerHTML` can lead to XSS when processing untrusted user input.
  
- **Clickjacking:**
  - Demonstrates how malicious websites can use iframes to trick users into performing unintended actions.

### Safe Practices
The project includes examples of unsafe practices and recommendations for securing applications.

## Getting Started

### Prerequisites
- Node.js >= 14
- npm >= 6

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ershubhamgupta1/portfolio-web-security
   cd portfolio-web-security
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```
4. **Access the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.



### Project Structure
src/
├── App.js                          # Main application file
├── xss-attacks/
│   ├── EvalAttack.js               # Eval XSS attack example
│   ├── UrlParamAttack.js           # URL parameter XSS attack example
│   └── DangerouslySetInnerHTMLAttack.js  # Dangerous HTML XSS example
├── ClickJaking.js                  # Clickjacking example
├── logo.svg                        # React logo
├── App.css                         # Styling for the app

### Security Recommendations
To prevent these security issues in a real-world application, here are some recommendations:

- Sanitize Inputs: Use libraries like DOMPurify to clean user inputs before rendering them in the DOM. 
-  Avoid eval: Do not use eval to execute code. It can execute any string of code, including malicious code.
-  Escape HTML: Always encode user inputs before rendering them in the DOM. This prevents injected HTML from executing as JavaScript.
- Content Security Policy (CSP): Configure CSP headers to restrict the execution of untrusted scripts and reduce the risk of XSS attacks.
- Clickjacking Protection: Use X-Frame-Options: DENY or Content-Security-Policy headers to prevent your pages from being embedded in iframes, thus mitigating clickjacking attacks.


## 📄 License
This project is licensed under the [MIT License](LICENSE).


## 👤 Author  

**Shubham Gupta**  
- GitHub: [@shubham-gupta](https://github.com/ershubhamgupta1)  
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/shubham-mern-stack-dev)  
- Email: ershubhamgupta1@gmail.com
