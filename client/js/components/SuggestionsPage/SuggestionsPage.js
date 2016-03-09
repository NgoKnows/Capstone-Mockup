import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import { Link } from 'react-router'

import SuggestionCard from './SuggestionCard'
import SuggestionFullCard from './FullSuggestionCard'

let suggestions = [
    {
        name: 'sam',
        title: 'Seattle Art Museum',
        description: `The Seattle Art Museum (commonly known as "SAM")
        is an art museum located in Seattle,
        Washington, USA.`
    },

    {
        name: 'wingluke',
        title: 'Wing Luke Museum',
        description: `The Wing Luke Museum of the Asian Pacific American Experience
        (informally, The Wing) is a history museum located in Seattle, Washington's
        Chinatown-International District.`
    },

    {
        name: 'emp',
        title: 'Experience Music Project Museum',
        description: `EMP Museum is a nonprofit museum, dedicated to contemporary popular culture.
        EMP Museum was founded by Microsoft co-founder Paul Allen in 2000.`
    }
];

class SuggestionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            overlay: '',
            suggestions : suggestions
        };
    }

    render() {
        return (
            <div style={STYLES.container}>
                <h4>Your Suggestions!</h4>
                <div style={STYLES.cardContainer}>
                    {this.state.suggestions.map((suggestion, index) => {
                        return (
                            <SuggestionCard
                                title={suggestion.title}
                                description={suggestion.description}
                                imageName={suggestion.name}
                                toggleOverlay={() => this.toggleOverlay(index)}
                            />
                        )
                    })}
                </div>
                {this.state.overlay !== '' ?
                    <div onClick={() => this.toggleOverlay()} className="overlay">
                        <div styles={STYLES.fullCardContainer}>
                            <SuggestionFullCard
                                title={this.state.suggestions[this.state.overlay].title}
                                description={this.state.suggestions[this.state.overlay].description}
                                imageName={this.state.suggestions[this.state.overlay].name}/>

                        </div>
                    </div> : null
                }
                <button onClick={() => this.newSuggestions()} style={STYLES.button} className="waves-effect waves-light btn">Get More Suggestions!</button>
            </div>
        );
    }

    toggleOverlay(index) {
        if (this.state.overlay !== '') {
            this.setState({
                overlay: ''
            })
        } else {
            this.setState({
                overlay: index
            })
        }
    }

    newSuggestions() {
        this.setState({
            suggestions: [
                {
                    name: 'dz',
                    title: 'Dough Zone',
                    description: `Dough Zone is a Dumpling House in Bellevue, WA`
                },

                {
                    name: 'japonessa',
                    title: 'Japonessa',
                    description: `Fusion spot dishes out sushi rolls with
                    Latin-influences, such as cilantro & mango, plus happy hour.`
                },

                {
                    name: 'paseo',
                    title: 'Paseo',
                    description: `Cash-only counter-service Caribbean joint serving
                    sandwiches & entrees in a tiny no-frills space.`
                }
            ]
        });
    }
}


const STYLES = {
    container : {
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex'
    },

    cardContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%'
    },

    fullCardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        marginTop: '6px'
    }
};

SuggestionsPage.propTypes = {};
SuggestionsPage.defaultProps = {};

export default Radium(SuggestionsPage);
