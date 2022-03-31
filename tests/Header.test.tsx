import Header from '../src/components/Header.js';
import React from 'react';
import { Link } from 'react-router-dom';
import { render } from "@testing-library/react";

describe('src/components/Header specs', () => {
    it('renders without crashing', () => {
        const div = document.createElement("div");
        // ReactDOM.render(<Link to="/"></Link>, div);

    });
    it('should return null when loaded/passing props.currentUser does not exist', () => {
        return render(<Header></Header>);
        // const result = ;
        // expect(result).toBeNull();
    });
});
