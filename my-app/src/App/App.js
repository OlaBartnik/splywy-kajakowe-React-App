import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import './App.scss';
import Main from "./Pages/Main/main";
import Masovian from "./Pages/State/Masovian/masovian"



class App extends React.Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/masovian' component={Masovian}/>
            </Switch>
        </HashRouter>
    }
}

export default App;
