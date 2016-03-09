import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import SuggestionCard from '../SuggestionsPage/SuggestionCard'

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

class ProfilePageList extends Component {
    render() {
        return (
            <div style={STYLES.container}>
                    <SuggestionCard
                        title={suggestions.sam.title}
                        description={suggestions.sam.description}
                        imageName={'sam'}
                        toggleOverlay={() => this.toggleOverlay('sam')}
                        list={true}
                    />
                    <SuggestionCard
                        title={suggestions.wingluke.title}
                        description={suggestions.wingluke.description}
                        imageName={'wingluke'}
                        toggleOverlay={() => this.toggleOverlay('wingluke')}
                        list={true}
                    />
                    <SuggestionCard
                        title={suggestions.emp.title}
                        description={suggestions.emp.description}
                        imageName={'emp'}
                        toggleOverlay={() => this.toggleOverlay('emp')}
                        list={true}
                    />
            </div>
        );
    }
}

const STYLES = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        marginTop: '30px',
    },

    link: {
        fontSize: '2rem',
        textDecoration: 'underline',
        marginBottom: '0.5em'
    }
};

ProfilePageList.propTypes = {};
ProfilePageList.defaultProps = {};

export default Radium(ProfilePageList);
