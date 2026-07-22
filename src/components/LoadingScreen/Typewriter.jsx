import { useEffect, useState } from "react";

function Typewriter({ text, speed = 40, onComplete }) {

    const [displayed, setDisplayed] = useState("");

    useEffect(() => {

        setDisplayed("");

        let index = 0;

        const interval = setInterval(() => {

            index++;

            setDisplayed(text.slice(0, index));

            if (index >= text.length) {
                clearInterval(interval);

                if (onComplete) {
                    setTimeout(onComplete, 250);
                }
            }

        }, speed);

        return () => clearInterval(interval);

    }, [text, speed, onComplete]);

    return (
        <>
            {displayed}
            <span className="cursor">█</span>
        </>
    );

}

export default Typewriter;
