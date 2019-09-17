import React, {Component} from 'react';
import "./tooltip.scss";
import Tooltip from 'react-tooltip-lite';

class textTootlip extends Component {

    state = {
        on: false
    }


    onMouseEnter = () => {

        this.setState({on: true});
        console.log("aaa");
    }

    onMouseLeave = () => {
        this.setState({on: false});
        console.log("adddada");
    }


    render() {
        const {on} = this.state;
        return (<div>
            <div className={`tooltip`} data-text="To jest text tooltipa">
                test
            </div>
            <span className={`tooltipText ${on ? "" : "hidden"}`}>aa</span>

        </div>)
    }
}

export default textTootlip;