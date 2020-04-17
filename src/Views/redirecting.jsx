import React from 'react';
import {withRouter} from 'react-router-dom';

class Redirecting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    componentWillMount() {
        if(this.props.state.index < this.props.state.max)
            this.props.history.push('/vraag');
        else
            this.props.history.push('/eind');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
            </div>
        );
    }
}

export default withRouter(Redirecting);
