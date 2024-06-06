// import React from "react";
// import "./CodeSnipet.css"; // Import CSS file for code snippet styles
//
// const CodeSnippet = ({ code }) => {
//     return (
//         <pre className="code-snippet">
//             <code>{code}</code>
//         </pre>
//     );
// };
//
// export default CodeSnippet;
import React, { useEffect } from "react";
import "prismjs/themes/prism.css"; // Import Prism.js CSS for theme
import Prism from "prismjs"; // Import Prism.js
import "./CodeSnipet.css"

const CodeSnippet = ({ code, language }) => {
    useEffect(() => {
        // Call Prism.highlightAll() to apply syntax highlighting to all code blocks
        Prism.highlightAll();
    }, []);
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        // You can also show a notification or perform any other action after copying
        alert("Code copied to clipboard!");
    };
    return (
        <pre>
            <code className={`language-${language}`}>
                {code}
            </code>
            <button onClick={handleCopy} className="button">Copy Code</button>
        </pre>
    );
};

export default CodeSnippet;

