import React from 'react';

// var APIkey = `3d6df3bc290f22a1f90a6f7ab363e060`;

class API extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "",
            id: "",
            error: false
        };

        this.setNewJs = this.setNewJs.bind(this);
    }

    setNewJs(cityid) {
        let script = this.newHeaderScript(cityid);
        let scriptbox = this.newWiget();

        if(document.querySelector('#pluginWeader')){
            document.querySelector('#pluginWeader').replaceWith(script);
        } else {
            document.body.appendChild(script);
        }

        if(document.querySelector('#pluginWeaderBox')){
            document.querySelector('#pluginWeaderBox').replaceWith(scriptbox);
        } else {
            document.body.appendChild(scriptbox);
        }
    }


    newHeaderScript(cityid) {
        var script = document.createElement('script');
        script.id = "pluginWeader";
        script.innerHTML = `
        window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
        window.myWidgetParam.push({
            id: 15,
            cityid: '${cityid}',
            appid: '3d6df3bc290f22a1f90a6f7ab363e060',
            units: 'metric',
            containerid: 'openweathermap-widget-15'
        });`;
        return script;
    }

    newWiget() {
        var script = document.createElement('script');
        script.id = "pluginWeaderBox";
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        return script;
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
                this.setState({error: false, city: data.name, id: data.id})
            })
            .catch(err => {
                console.log(err);
                this.setState({error: true})
            });

        this.setNewJs(770028);
    }

    render() {
        return (<div>
            <div id="openweathermap-widget-15"></div>
        </div>)
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