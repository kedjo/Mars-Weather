import React from 'react';
import { Date } from "../components/Date";
import { Cards } from "../components/Cards";
import { Blabla } from "../components/Blabla";

export const Home = () => {

    return (
        <div className="home">
            <div className="date">
                <Date />
            </div>
            <div className="right-section">
                <Cards />
            </div>
            <div className="main-text">
                <Blabla />
            </div>         
        </div>
    )
}
