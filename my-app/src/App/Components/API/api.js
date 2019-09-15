import React from 'react';

// var APIkey = `3d6df3bc290f22a1f90a6f7ab363e060`;

class API extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "",
            error: false
        }
    }

    componentDidMount() {
        let APIurl = "http://api.openweathermap.org/data/2.5/weather?id=770028&lang=pl&APPID=3d6df3bc290f22a1f90a6f7ab363e060&units=metric";

        fetch(APIurl)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error("nie udało sie")
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                //this.setState({error: false, city: data.name})
            })
            .catch(err => {
                console.log(err);
                this.setState({error: true})
            })

    }

    render() {return (<h1>testeeste</h1>)
    }
}

export default API;

//
// return fetch(APIurl)
//     .then(response => {
//         if (response.ok) {
//             return response
//         }
//         throw Error("nie udało sie")
//     })
//     .then(response => response.json())
//     .then( data => console.log(data))
//     // this.setState({error: false, city: data.name})
//     //
//
//     .catch(err => {
//         console.log(err);
//         this.setState({error: true})
// //     })
// render() {
//     return (<h1>{this.state.city}</h1>)
// }

// const APIurl = `api.openweathermap.org/data/2.5/weather?id=${id}&lang=pl&APPID=3d6df3bc290f22a1f90a6f7ab363e060&units=metric`;