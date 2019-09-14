import React from 'react';
import "./wkra";


class RouteSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: "Sobieski",
            end: "Joniec",
            distance: "",
            duration: "",
            message: ""
        }
    }


    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value})
    }


    handleSubmit = e => {
        e.preventDefault();
        const {start} = this.state;
        const {end} = this.state;
        let distance = [];
        let minDuration = [];
        let maxDuration = [];
        let message =[];
        if (start === "Dziektarzewo" && end === "Sochocin") {
            distance.push(23.6);
            minDuration.push(6);
            maxDuration.push(7);
        } else if (start === "Płaciszewo" && end === "Sochocin") {
            distance.push(15.4);
            minDuration.push(4);
            maxDuration.push(5);
        } else if (start === "Malużyn" && end === "Sochocin") {
            distance.push(11);
            minDuration.push(3);
            maxDuration.push(4);
        } else if (start === "Sochocin" && end === "Bolęcin") {
            distance.push(6.5);
            minDuration.push(2);
            maxDuration.push(2.5);
        } else if (start === "Sochocin" && end === "Sobieski") {
            distance.push(10.5);
            minDuration.push(3);
            maxDuration.push(4);
        } else if (start === "Sochocin" && end === "Joniec") {
            distance.push(17.5);
            minDuration.push(4);
            maxDuration.push(5);
        } else if (start === "Kępa" && end === "Joniec") {
            distance.push(26);
            minDuration.push(7);
            maxDuration.push(8);
        } else if (start === "Bolęcin" && end === "Joniec") {
            distance.push(11);
            minDuration.push(3);
            maxDuration.push(4);
        } else if (start === "Sobieski" && end === "Joniec") {
            distance.push(7);
            minDuration.push(2);
            maxDuration.push(2.5);
        } else if (start === "Joniec" && end === "Borkowo") {
            distance.push(10.5);
            minDuration.push(3);
            maxDuration.push(4);
        } else if (start === "Joniec" && end === "Śniadówko") {
            distance.push(17.3);
            minDuration.push(4);
            maxDuration.push(5);
        } else if (start === "Joniec" && end === "Pomiechówek") {
            distance.push(26);
            minDuration.push(7);
            maxDuration.push(8);
        }
        // else if (start === "Borkowo" || start === "Śniadówko" || start === "Malużyn"|| start !== "Sochocin"|| start !== "Sochocin"|| start !== "Sochocin") {
        //     message.push("nie mamy jak Cie zgarnać :D")
        // }
        this.setState({
            distance: `${distance}km`,
            duration: `${minDuration}-${maxDuration}h`,
            message: message
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Start spływu
                        <select name="start" value={this.state.start} onChange={this.handleChange}>
                            <option value="Dziektarzewo">Dziektarzewo</option>
                            <option value="Płaciszewo">Płaciszewo</option>
                            <option value="Malużyn">Malużyn</option>
                            <option value="Kępa">Kępa</option>
                            <option value="Sochocin">Sochocin</option>
                            <option value="Bolęcin">Bolęcin</option>
                            <option value="Sobieski">Sobieski</option>
                            <option value="Joniec">Joniec</option>
                        </select>
                    </label>
                    <label> Koniec spływu
                        <select name="end" value={this.state.end} onChange={this.handleChange}>
                            <option value="Sochocin">Sochocin</option>
                            <option value="Bolęcin">Bolęcin</option>
                            <option value="Sobieski">Sobieski</option>
                            <option value="Joniec">Joniec</option>
                            <option value="Borkowo">Borkowo</option>
                            <option value="Śniadówko">Śniadówko</option>
                            <option value="Pomiechówek">Pomiechówek</option>
                        </select>
                    </label>
                    <input type="submit" value="Wyznacz trasę"/>
                </form>
                {this.state.distance !== "" && this.state.message !=="" ? <h3>Kilometry do przepłynięcia: {this.state.distance}</h3> : null}
                {this.state.duration !== "" && this.state.message !==""? <h3>Średni czas spływu: {this.state.duration} </h3> : null}
                {this.state.message !== "" ? <h3>{this.state.message} </h3> : null}
            </div>

        )
    }
}

class Wkra extends React.Component {
    render() {
        return <RouteSelection/>
    }
}

export default Wkra;