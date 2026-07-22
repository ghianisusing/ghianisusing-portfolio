import { useEffect, useRef } from "react";
import Typewriter from "./Typewriter";

function Editor({ progress, currentStep, steps, logs }) {

    const terminalRef = useRef(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTo({
                top: terminalRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [logs]);

    return (
        <div className="editor">

            <div className="editor-code">

                <p>
                    <span className="keyword">import</span>{" "}
                    <span className="variable">React</span>{" "}
                    <span className="keyword">from</span>{" "}
                    <span className="string">"react"</span>;
                </p>

                <p>
                    <span className="keyword">import</span>{" "}
                    <span className="variable">gsap</span>{" "}
                    <span className="keyword">from</span>{" "}
                    <span className="string">"gsap"</span>;
                </p>

                <br />

                <div
                    className="terminal"
                    ref={terminalRef}
                >

                    {logs.map((log, index) => (

                        <p
                            key={index}
                            className="done log"
                        >
                            ✓ {log}
                        </p>

                    ))}

                    {currentStep < steps.length && (

                        <p className="active log">

                            &gt;{" "}

                            <Typewriter
                                text={steps[currentStep]}
                                speed={30}
                            />

                        </p>

                    )}

                </div>

                <div className="progress-container">

                    <div className="progress-bar">

                        <div
                            className="progress-fill"
                            style={{
                                width: `${progress}%`
                            }}
                        />

                    </div>

                    <span className="progress-percent">
                        {progress}%
                    </span>

                </div>

            </div>

        </div>
    );
}

export default Editor;
