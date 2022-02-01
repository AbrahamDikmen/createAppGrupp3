import { useState, useEffect } from "react";
import "../Styles/digital-clock.css";
export default function DigitalClock({ timezone }) {

    //const [timeString, setTimeString] = useState(new Date().toLocaleTimeString());
    const [timeString, setTimeString] = useState([]);

    let specificCityTime = "";

    const getTime = async () => {
        let response = await fetch(
            `http://worldtimeapi.org/api/timezone/${timezone}`
        );

        if (response.status === 200) {
            const time = await response.json();
            specificCityTime = time.datetime;
        }
        else {
            throw new Error("Unable to fetch data");
        }
    }

    useEffect(() => {
        if (timezone) {
            const timer = setInterval(() => {
                getTime();
                setTimeString(`${specificCityTime.substring(11, 19)}`);
            }, 1000);
            return function cleanup() { clearInterval(timer); }
        }
        else {
            const timer = setInterval(() => { setTimeString(new Date().toLocaleTimeString()) }, 1000);
            return function cleanup() { clearInterval(timer); }
        }
    }, []);

    return (
        <div className="digitalClock">
            <h2>{timeString}</h2>
        </div>
    );

}