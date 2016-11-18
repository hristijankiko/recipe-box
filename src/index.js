import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import recipes from './reducers/recipes';
import App from './components/App';
require('../css/main.sass');

const initialState = {
    recipes: [{id: 0, name: "Apples", description: "Description", ingredients: ["ingr1", "ingr2", "ingr3"]}]
};

const store = createStore(recipes, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
