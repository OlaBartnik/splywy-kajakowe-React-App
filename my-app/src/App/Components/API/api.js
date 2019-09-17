import React from 'react';
import "./api.scss";
// var APIkey = `3d6df3bc290f22a1f90a6f7ab363e060`;
// bbe0c2ba1fbafc16bc5f9d6da20d6048

class API extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "",
            id: "770028",
            error: false
        };

        this.setNewJs = this.setNewJs.bind(this);
        this.refresh = this.refresh.bind(this);
        this.changeID = this.changeID.bind(this);
    }

    setNewJs(cityid) {
        let script = this.newHeaderScript(cityid);
        let scriptbox = this.newWiget();

        document.querySelector('#openweathermap-widget-15').innerHTML = '';

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

    changeID() {
        let state = this.state;
        state['id'] = 758681;
        this.setState(state);
        this.refresh();
    }

    componentDidMount() {
        this.refresh();
    }



    refresh(){
        let APIurl = `http://api.openweathermap.org/data/2.5/weather?id=${this.state.id}&lang=pl&APPID=bbe0c2ba1fbafc16bc5f9d6da20d6048&units=metric`;

        fetch(APIurl)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error("nie udało sie")
            })
            .then(response => response.json())
            .then(data => {
                this.setState({error: false, city: data.name, id: data.id});
                this.setNewJs(data.id);
            })
            .catch(err => {
                this.setState({error: true})
            });

        // this.setNewJs(770028);

    }


    render() {
        return (<div>
            <div id="openweathermap-widget-15" className={"widget"}></div>
            <button onClick={this.changeID}>Sochocin id 758681</button>
            {this.state.id}
        </div>)
    }
}

export default API;



// const APIurl = `api.openweathermap.org/data/2.5/weather?id=${id}&lang=pl&APPID=3d6df3bc290f22a1f90a6f7ab363e060&units=metric`;