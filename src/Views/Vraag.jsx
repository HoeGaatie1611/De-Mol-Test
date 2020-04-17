import React from 'react';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import klik from "../Assets/mp3/klik.wav";
const delay = require('delay');


class Vraag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titel: "Laden..."
        };
    };

    async componentDidMount() {
        this.processAnswers()
    };

    processAnswers = async () => {
        const current = this.props.state.questions[this.props.state.index];
        if(current === undefined)
            console.log("LEEG");
        else {
            this.setState({
                titel: current.titel
            })
            const answers = current.antwoorden;

            const rightAnswer = answers[0];

            const antwoorden = this.shuffleArray(answers);

            const rightAnswerIndex = parseInt(antwoorden.indexOf(rightAnswer));

            let antwoorddict = [];
            for (let i = 0; i < antwoorden.length; i++) {
                antwoorddict.push({"id": i, "text": antwoorden[i]});
            }

            let theAnswers = antwoorddict.map((d) => <div className={"Answer"}>
                <button id={d.id} onClick={this.processAnswer} className="Button-Fingerprint"/>
                <p className={"Answer-text"}>{d.text}</p>
            </div>);

            this.setState({
                tiles: (
                    <div className={"Box-Answers"}>
                        {theAnswers}
                    </div>
                ),
                rightAnswer: rightAnswerIndex
            })
        }
    };

    shuffleArray = (array) => {
        let copy = array;
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    };

    handleChange = (event) => {
        this.setState({
            [`${event.target.id}`]: event.target.value
        });
    };

    processAnswer = async (e) => {
        this.props.state.click.play();

        if (parseInt(e.currentTarget.id) === parseInt(this.state.rightAnswer))
            this.props.changeGlobalState("right", this.props.state.right + 1);
        else
            this.props.changeGlobalState("faults", this.props.state.faults + 1);

        this.props.changeGlobalState("index", this.props.state.index + 1);

        await delay(500);

        this.props.history.push("/redirect")
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className={"App-Margin"}>
                        <h2 className={"widm-font"}>{this.state.titel}</h2>
                        {this.state.tiles}
                        <h1/>
                    </div>
                </header>
            </div>
        );
    }
}

export default withRouter(Vraag);
