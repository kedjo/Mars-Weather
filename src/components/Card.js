import React from 'react';

export const Card = ( {sol, data} ) => {
    // console.log(data);
    // console.log(sol);

    const {av, ct, mn, mx} = data["PRE"];
    const utcTime = data["First_UTC"];
    console.log(mn, mx);

    return (
            <div className="card">
                <div className="sol-title">
                    <h3>Sol {sol}</h3>
                    <h4>{utcTime}</h4>
                    <div className="underline-title"></div>
                </div>
                <div className="pressure">
                    <h5>average: {av.toPrecision(4)}<span>pa</span></h5>
                    <h5>high: {mx.toPrecision(4)}<span>pa</span></h5>
                    <h5>low: {mn.toPrecision(4)}<span>pa</span></h5>
                </div>       
            </div>
    )
}
