import React, { useState, useEffect } from 'react';
import { Card } from "./Card";
import mockData from "./mockData";
const url = "https://api.nasa.gov/insight_weather/?api_key=c9Nzps3ewI44hpufud95xqeeg9c82fnGbCeRKNlb&feedtype=json&ver=1.0";

export const Cards = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(mockData);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                }
                ,
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if(data) {
        const keyNumber = data.sol_keys;
        console.log(keyNumber);
    
        return (
                <div className="card-container">
                    {keyNumber.map(num => {
                            if(num !== 0) {
                                return <Card key={num} sol={num} data={data[num]}></Card>;
                                //</div><h6 key={num}>{context[num].First_UTC}</h6>
                            }
                    })}
                </div>
        )
    }
    
}
