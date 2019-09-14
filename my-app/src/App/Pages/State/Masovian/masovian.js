import React from 'react';
import "./masovian.scss";
import Mazowszemap from "./mazowszemap";

class Masovian extends React.Component {
    render() {
        return (<div className={"masovianMap"}>
            <Mazowszemap/>
        </div>)
    }
}


export default Masovian;
