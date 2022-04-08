// src/test/utils/renderConnected.js
import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Replace this with the appropriate imports for your project
import { editor, reducerInitialState } from '../src/reducers/editor.js';

const renderConnected = (
    ui, {
        initialState = {reducerInitialState},
        store = createStore(editor, initialState),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({ children }) => (
        <Provider store={store}>{children}</Provider>
    );
    return render(ui, { wrapper: Wrapper, ...renderOptions});
};

export default renderConnected;