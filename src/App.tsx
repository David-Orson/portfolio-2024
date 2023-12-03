// npm
import React from "react";

// components
import { Headline } from "./components/organisms";

function App() {
    return (
        <div
            className="App"
            style={{
                background: "hsl(213, 100%, 5%)",
                minHeight: "100vh",
                minWidth: "100vw",
            }}
        >
            <Headline />
        </div>
    );
}

export default App;
