import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch

} from 'react-router-dom';

import './App.scss';
import Main from "./Pages/Main/main";
import Masovian from "./Pages/State/Masovian/masovian";
import Wkra from "./Pages/State/Masovian/Wkra/wkra";
import NotFound from "./Pages/404/404";


class App extends React.Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/masovian' component={Masovian}/>
                <Route path='/wkra' component={Wkra}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    }
}

export default App;
