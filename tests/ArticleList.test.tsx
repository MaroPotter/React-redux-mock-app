import ArticleList from '../src/components/ArticleList';
import React from 'react';
import '@testing-library/jest-dom';
import {Provider, ReactReduxContext} from "react-redux";
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

describe('src/components/Editor.js', () => {


    it('should render the ArticleList component', () => {

        let store;
        let component;
        store = mockStore({    articleSlug: 'slug',
            title: 'title',
            description: 'description',
            body: 'body',
            tagInput: 'tagInput',
            tagList: 'tagList',
            match: {
                params: {
                    slug: 'tytul'
                },
                path: '/editor/tytul',
                url: '/editor/tytul',
                isExact: true
            }});
        component = renderer.create(
            <Provider store={store}>
                <ArticleList />
            </Provider>);


    });


});