import React, { Component } from 'react';


const API = "https://example.p.rapidapi.com/?rapidapi-key=***************************"


const APIKEY = '3ef9eaa84dmsh53638891ed7cc49p1566ebjsn1d05b50b17ac'

class Homepage extends Component {
    state = {
        quote: [],
        index: 0

    }

    componentDidMount() {
        // call the API and update the state

    }
    render() {
        const { quote, index } = this.state;

        return (
            <div className="d-flex justify-content-center vh-100">
                <p>Quote text</p>
                <div className="col-xs-6 box">
                    <a href="/"> share on Twitter</a>
                    <button>Get Quote</button>

                </div>
            </div>
        );
    }
}

export default Homepage;

