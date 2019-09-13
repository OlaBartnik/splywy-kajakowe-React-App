import React from 'react';
import "./wkra";


class RouteSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: "Sobieski",
            end: "Joniec",
            distance: "",
            duration: ""
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
        if (start === "Sochocin" && end === "Joniec") {
            distance.push(17.5);
            minDuration.push(4);
            maxDuration.push(5);
        }
        this.setState({
            distance: `${distance}km`,
            duration: `${minDuration}-${maxDuration}h`
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Start spływu
                        <select name="start" value={this.state.start} onChange={this.handleChange}>
                            <option value="Sochocin">Sochocin</option>
                            <option value="Joniec">Joniec</option>
                            <option value="Sobieski">Sobieski</option>
                        </select>
                    </label>
                    <label> Koniec spływu
                        <select name="end" value={this.state.end} onChange={this.handleChange}>
                            <option value="Bolęcin">Bolęcin</option>
                            <option value="Sobieski">Sobieski</option>
                            <option value="Joniec">Joniec</option>
                        </select>
                    </label>
                    <input type="submit" value="Wyznacz trasę"/>
                </form>
                <h3>Kilometry do przepłynięcia: {this.state.distance}</h3>
                <h3>Średni czas spływu: {this.state.duration} </h3>
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