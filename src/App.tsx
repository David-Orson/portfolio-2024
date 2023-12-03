// npm
import React from "react";

// hooks
import { useWindowSize } from "./hooks/ui/useWindowSize";

// components
import { Headline, About } from "./components/organisms";
import { Padding } from "./components/atoms";

const App = () => {
    // hooks
    const w = useWindowSize();

    return (
        <>
            <div
                className="App"
                style={{
                    background: `radial-gradient(${Math.round(
                        w / 3 + 200
                    )}px at ${Math.round(w - w / 3)}px ${
                        w < 768 ? 100 : 200
                    }px, rgba(29, 100, 216, 0.15), transparent 80%)`,
                    height: "100%",
                    maxWidth: "100vw",
                }}
            >
                <Padding>
                    <Headline />
                    <About />
                </Padding>
            </div>
        </>
    );
};

export default App;
