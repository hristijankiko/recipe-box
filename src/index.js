import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import recipes from './reducers/recipes';
import AppContainer from './containers/AppContainer';
require('../css/main.sass');

const initialState = {
    recipes: [
        {id: 0, name: "Apples", description: "Description", ingredients: ["ingr1", "ingr2", "ingr3"]},
        {id: 1, name: "Noodles", description: "Noodles description", ingredients: ["noodles", "water"]},
        {id: 2, name: "Bacon", description: "Bacon description", ingredients: ["bacon", "meat"]},
        {id: 3, name: "Pizza", description: "Pizza description", ingredients: ["pizza", "cheese", "ketchup"]}
    ]
};
if(!JSON.parse(localStorage.getItem('recipes')) || JSON.parse(localStorage.getItem('recipes')).recipes.length === 0){
    localStorage.setItem('recipes', JSON.stringify(initialState));
}

const store = createStore(reducers, JSON.parse(localStorage.getItem('recipes')));
store.subscribe(() => {
    localStorage.setItem('recipes', JSON.stringify(store.getState()));
})

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);

// Vanilla JavaScript files
require('./js/modal.js');