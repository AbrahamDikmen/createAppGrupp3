import { useState, useEffect } from "react";
import "../Styles/digital-clock.css";
export default function DigitalClock() {

    const [timeString, setTimeString] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => { setTimeString(new Date().toLocaleTimeString()) }, 1000);
        return function cleanup() { clearInterval(timer); }
    }, []);

    return <div className="digitalClock">
        <h2>{timeString}</h2>
    </div>

}