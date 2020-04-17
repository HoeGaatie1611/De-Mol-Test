import React from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Eind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    componentDidMount() {
        if (this.props.state.start)
            axios.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/tracker-pxmwp/service/HTTP/incoming_webhook/addResult', {
                naam: this.props.state.naam,
                fout: this.props.state.faults,
                goed: this.props.state.right
            }).then(() => {
                alert("Antwoord staat online! Je kan dit tablad sluiten")
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className={"App-Margin"}>
                        <h1 className={"widm-font"}>Dit was het einde van de test. Je antwoorden zijn genoteerd.</h1>
                    </div>
                </header>
            </div>
        );
    }
}

export default withRouter(Eind);
