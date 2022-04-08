import Login from '../src/components/Login.js';
import React from 'react';
import '@testing-library/jest-dom';
import {Provider, ReactReduxContext} from "react-redux";
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

describe('src/components/Login.js', () => {


    it('should render the Login component', () => {

        let store;
        let component;
        store = mockStore({/* TO DO */});
        component = renderer.create(
            <Provider store={store}>
                <Login />
            </Provider>);


    });


});