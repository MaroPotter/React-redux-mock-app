import ArticleList from '../src/components/ArticleList';
import React from 'react';
import '@testing-library/jest-dom';
import {render} from "@testing-library/react";


describe('src/components/ArticleList.js', () => {

    it('can be rendered', () => {
        render(<ArticleList/>);
    });

});