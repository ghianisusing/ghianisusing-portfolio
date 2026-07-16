import "./LoadingScreen.css";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import TitleBar from "./TitleBar";
import SideBar from "./SideBar";
import Editor from "./Editor";

const steps = [
    "Booting portfolio...",
    "Loading profile...",
    "Importing projects...",
    "Loading certificates...",
    "Compiling skills...",
    "Initializing animations...",
    "Preparing experience...",
    "Launching portfolio..."
];

function LoadingScreen({ finishLoading }) {

    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [logs, setLogs] = useState([]);
    const screenRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".loading-screen",
                { opacity: 0 },
                { opacity: 1, duration: 0.6, ease: "power2.out" }
            );

            gsap.fromTo(".loading-window",
                { opacity: 0, scale: 0.88, y: 30 },
                { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.15 }
            );
        }, screenRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {

        let currentProgress = 0;
        let currentLog = -1;

        const interval = setInterval(() => {

            currentProgress++;

            setProgress(currentProgress);

            const stepIndex = Math.min(
                Math.floor((currentProgress / 100) * steps.length),
                steps.length - 1
            );

            if (stepIndex !== currentLog) {

                currentLog = stepIndex;

                setCurrentStep(stepIndex);

                setLogs(prev => {

                    if (prev.includes(steps[stepIndex])) return prev;

                    return [...prev, steps[stepIndex]];

                });

            }

            if (currentProgress >= 100) {

                clearInterval(interval);

                gsap.timeline()
                    .to(".loading-window", {
                        scale: 0.92,
                        opacity: 0.6,
                        duration: 0.4,
                        ease: "power2.inOut"
                    })
                    .to(".loading-screen", {
                        opacity: 0,
                        scale: 1.05,
                        duration: 1,
                        ease: "power2.inOut",
                        onComplete: finishLoading
                    }, "-=0.2");

            }

        }, 50);

        return () => clearInterval(interval);

    }, [finishLoading]);

    return (

        <div className="loading-screen" ref={screenRef}>

            <div className="loading-window">

                <TitleBar />

                <div className="editor-layout">

                    <SideBar />

                    <Editor
                        progress={progress}
                        currentStep={currentStep}
                        steps={steps}
                        logs={logs}
                    />

                </div>

            </div>

        </div>

    );

}

export default LoadingScreen;