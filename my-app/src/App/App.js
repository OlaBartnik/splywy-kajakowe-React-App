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
import API from "./Components/API/api";
import textTootlip from "./Components/Tooltip/tooltip"



class App extends React.Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/masovian' component={Masovian}/>
                <Route path='/wkra' component={Wkra}/>
                <Route path='/slider' component={Slider}/>
                <Route path='/api' component={API}/>
                <Route path='/tooltip' component={textTootlip}/>



            </Switch>
        </HashRouter>
    }
}

export default App;
