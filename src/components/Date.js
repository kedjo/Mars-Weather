import React, { useState, useEffect } from 'react';
export const Date = () => {

    const [date, setDate] = useState(new window.Date());

    function tick() {
        setDate(new window.Date());
    }

    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet",
     "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    const dayNow = days[date.getUTCDay()]
    const dateNow = date.getDate();
    const monthNow = months[date.getMonth()];
    //console.log(date);

    return (
        <>

            <div className="clock">
                <h2>{dayNow} {dateNow} {monthNow} {date.getFullYear()}</h2>
                <h1>{date.toLocaleTimeString()}</h1>
            </div>
        </>
    );
}
