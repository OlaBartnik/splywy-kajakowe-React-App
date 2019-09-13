import React from 'react';
import "./wkra";

// class Wkra extends React.Component{
//     render() {return <h1>div</h1>
//     }
// }
//
// export default Wkra;


class RouteSelection extends React.Component {

    state = {
        start: "Sobieski",
        end: "Joniec"
    }

    handleStartChange = e => {
        this.setState({start: e.target.value})
    }
    handleEndChange = e => {
        this.setState({end: e.target.value})
    }

    render() {
        return (<form>
                <label> Start spływu
                    <select>
                        <option value="Sochocin" onChange={this.handleStartChange}>Sochocin</option>
                        <option value="Joniec" onChange={this.handleStartChange}>Joniec</option>
                        <option value="Sobieski" onChange={this.handleStartChange}>Sobieski</option>
                    </select>
                </label>
                <label> Koniec spływu
                    <select>
                        <option value="Bolęcin" onChange={this.handleEndChange}>Bolęcin</option>
                        <option value="Sobieski" onChange={this.handleEndChange}>Sobieski</option>
                        <option value="Joniec" onChange={this.handleEndChange}>Joniec</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class Wkra extends React.Component {
    render() {
        return <RouteSelection/>
    }
}

export default Wkra;