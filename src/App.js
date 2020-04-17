import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Home from "./Views/home";
import Vraag from "./Views/Vraag";
import Redirecting from "./Views/redirecting";
import Eind from "./Views/Eind";

//Sound
import test from './Assets/mp3/test.mp3';
import klik from "./Assets/mp3/klik.wav";

// export default function App() {
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: "",
            index: 0,
            max: 0,
            start: false,
            naam: "",
            faults: 0,
            right: 0
        }
    }

    changeGlobalState = async (change, value) => {
        this.setState({[`${change}`]: value});
    };

    componentDidMount() {
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.play()

        this.setState({
            click: document.getElementsByClassName("audio-click")[0]
        })
    }

    render() {
        return (
            <Router>
                {(window.location.pathname !== "/" && this.state.start === false) ? <Redirect to='/'/> : null}
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home state={this.state} changeGlobalState={this.changeGlobalState}/>
                        </Route>
                        <Route exact path="/vraag">
                            <Vraag state={this.state} changeGlobalState={this.changeGlobalState}/>
                        </Route>
                        <Route exact path="/redirect">
                            <Redirecting state={this.state} changeGlobalState={this.changeGlobalState}/>
                        </Route>
                        <Route exact path="/eind">
                            <Eind state={this.state} changeGlobalState={this.changeGlobalState}/>
                        </Route>
                    </Switch>
                </div>
                <audio src={test} className="audio-element"/>
                <audio src={klik} className="audio-click"/>
            </Router>
        );
    }
}

export default App;
