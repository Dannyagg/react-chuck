import React, { Component } from 'react';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            isLoading: false
        }
    }

    componentDidMount() {
        console.log("COMPONENT MOUNTED! WE HAVE A DOM NODE NOW!")
    }


    _fetchJoke = () => {
        this.setState({
            isLoading: true
        }, async () => {
            const response = await fetch(
                'https://api.chucknorris.io/jokes/random?category=dev'
            ).then(response => response.json());
            this.setState({
                joke: response.value,
                isLoading: false
            });
        }
        );
    };

    render() {
        const { joke, isLoading } = this.state;
        return (
            <>
                <h4>{!!isLoading ? "Loading..." : joke}</h4>
                <button type="button" onClick={this._fetchJoke}>Get a Joke</button>
            </>
        )
    }
}

export default Joke;