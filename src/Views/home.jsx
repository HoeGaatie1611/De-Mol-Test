import React from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            naam: ""
        }
    };

    async componentDidMount() {
    };

    handleChange = (event) => {
        this.setState({
            [`${event.target.id}`]: event.target.value
        });
    };

    startGame = async () => {
        await axios.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/tracker-pxmwp/service/HTTP/incoming_webhook/getQuestions')
            .then(async (response) => {
                await this.props.changeGlobalState("questions", response.data);
                await this.props.changeGlobalState("max", response.data.length);
                await this.props.changeGlobalState("start", true)
                await this.props.changeGlobalState("naam", this.state.naam)
            });

        this.props.history.push("/vraag");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className={"widm-font"}>Wie is de mol? - De test!</h1>

                    <h3 className={"widm-font"}>Naam</h3>
                    <label>
                        <input type="text" id={"naam"} value={this.state.naam} onChange={this.handleChange}/>
                        <h2></h2>
                    </label>
                    <button className={"button5 button"} onClick={this.startGame}>Maak de test</button>

                </header>
            </div>
        );
    }
}

export default withRouter(Home);
