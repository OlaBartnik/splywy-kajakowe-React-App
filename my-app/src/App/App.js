import React from 'react';
import {
    HashRouter,
    Route,
    // Link,
    Switch,
    // NavLink,
} from 'react-router-dom';

import './App.scss';
import Main from "./Pages/Main/main";
import Masovian from "./Pages/State/Masovian/masovian";
import Wkra from "./Pages/State/Masovian/Wkra/wkra";
import Slider from "./Components/Slider/slider";
// import API from "./Components/API/api";




class App extends React.Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/masovian' component={Masovian}/>
                <Route path='/wkra' component={Wkra}/>
                <Route path='/slider' component={Slider}/>


            </Switch>
        </HashRouter>
    }
}

export default App;
