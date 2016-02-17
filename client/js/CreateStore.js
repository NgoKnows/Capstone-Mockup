import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable'

import { hashHistory, browserHistory, createMemoryHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'

import DevTools from 'containers/DevTools'
import Reducer from './redux/reducer'

export default function composeStore(url) {

    //always use thunk middleware
    let middleware = [applyMiddleware(thunk)];

    const reduxRouterMiddleware = syncHistory(browserHistory);

    middleware.push(applyMiddleware(reduxRouterMiddleware));

    middleware.push(DevTools.instrument());

    const finalCreateStore = compose(...middleware)(createStore);

    const store = finalCreateStore(Reducer);

    //allow replay of routing
    reduxRouterMiddleware.listenForReplays(store, (state) => state.get('routing').location);

    return store;
}
