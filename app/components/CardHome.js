import React, { useState } from 'react';
import styles from '../css/Home.css';
import CardLogin from './CardLogin';
import CardCreateAccount from './CardCreateAccount';
import Button from "react-bootstrap/Button";


const logoMovieAppPath = require("../images/logoMovieApp.png");


const CardHome = () => {

    const[cardState, setCardState] = useState("login")

    const changeCardState = () => {
        if(cardState === "login"){
        setCardState("create");
        } else {
            setCardState("login")
        }
    };

    if(cardState === "login"){
    return (
        <div className={styles.containerHome}>
            <img src={logoMovieAppPath} alt="logoMovieApp"/>
            <div className={styles.cardLogin}><CardLogin/></div>
            <Button onClick={changeCardState}>Sign up</Button>
        </div>
    );
    } if(cardState === "create"){
        return (
        <div className={styles.containerHome}>
            <img src={logoMovieAppPath} alt="logoMovieApp"/>
            <div className={styles.cardLogin}><CardCreateAccount/></div>
            <Button onClick={changeCardState}>Sign in</Button>
        </div>
        );
    } 
};



export default CardHome;