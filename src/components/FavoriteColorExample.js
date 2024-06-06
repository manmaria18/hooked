//import { useState } from "react";
import React, { useState } from "react";
//import ReactDOM from "react-dom/client";

export function FavoriteColorExample() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue
            </button>
        </>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);