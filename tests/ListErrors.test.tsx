import React from 'react';
import ListErrors from '../src/components/ListErrors.js';
import {render, screen, waitForElementToBeRemoved} from "@testing-library/react";
import '@testing-library/jest-dom';


describe('src/components/ListErrors.js', () => {
    it('renders properly with passed props', () => {
        const mockListErrorsProps = {
            errors: ["Error string 1", "Error string 2", "Error string 3"]
        };

        render(<ListErrors errors={mockListErrorsProps.errors} />);

        expect(mockListErrorsProps.errors).toContain('Error string 1');
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('0 Error string 1')).toBeInTheDocument();
        expect(screen.getByRole('list')).toContainHTML('<ul class="error-messages"><li>0 Error string 1</li><li>1 Error string 2</li><li>2 Error string 3</li></ul>');
    });

    it('returns null when no props were passed', () => {
        const mockedEmptyProps = {
            errors: null // according to ../src/reducers/editor.js, line 29
        };

        const {queryByRole} = render(<ListErrors errors={mockedEmptyProps.errors} />);
        expect(queryByRole('list')).toBeNull();
        // expect(render(<ListErrors errors={mockedEmptyProps.errors} />)).toBeNull();

    });

});
