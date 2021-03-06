import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import { Link } from 'react-router'

import SuggestionCard from '../SuggestionsPage/SuggestionCard'
import SuggestionFullCard from '../SuggestionsPage/FullSuggestionCard'

const suggestions = {
    sam: {
        title: 'Seattle Art Museum',
        description: `The Seattle Art Museum (commonly known as "SAM")
        is an art museum located in Seattle,
        Washington, USA.`
    },

    wingluke: {
        title: 'Wing Luke Museum',
        description: `The Wing Luke Museum of the Asian Pacific American Experience
        (informally, The Wing) is a history museum located in Seattle, Washington's
        Chinatown-International District.`
    },

    emp: {
        title: 'Experience Music Project Museum',
        description: `EMP Museum is a nonprofit museum, dedicated to contemporary popular culture.
        EMP Museum was founded by Microsoft co-founder Paul Allen in 2000.`
    }
}

class SignUpLearn extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                <h4>Do you like these places?</h4>
                <div style={STYLES.cardContainer}>
                    <SuggestionCard
                        title={suggestions.sam.title}
                        description={suggestions.sam.description}
                        imageName={'sam'}
                        toggleOverlay={() => this.toggleOverlay('sam')}
                        signup={true}
                    />
                    <SuggestionCard
                        title={suggestions.wingluke.title}
                        description={suggestions.wingluke.description}
                        imageName={'wingluke'}
                        toggleOverlay={() => this.toggleOverlay('wingluke')}
                        signup={true}
                    />
                    <SuggestionCard
                        title={suggestions.emp.title}
                        description={suggestions.emp.description}
                        imageName={'emp'}
                        toggleOverlay={() => this.toggleOverlay('emp')}
                        signup={true}
                    />
                </div>
                {this.state.overlay ?
                    <div onClick={() => this.toggleOverlay()} className="overlay">
                        <div styles={STYLES.fullCardContainer}>
                            <SuggestionFullCard
                                title={suggestions[this.state.overlay].title}
                                description={suggestions[this.state.overlay].description}
                                imageName={this.state.overlay}/>

                        </div>
                    </div> : null
                }
                <Link to="/signup/form">
                    <button className="waves-effect waves-light btn">Next</button>
                </Link>
            </div>
        );
    }

    toggleOverlay(place) {
        if (this.state.overlay) {
            this.setState({
                overlay: ''
            })
        } else {
            this.setState({
                overlay: place
            })
        }
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
        width: '100%',
    },

    fullCardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

SignUpLearn.propTypes = {};
SignUpLearn.defaultProps = {};

export default Radium(SignUpLearn);
