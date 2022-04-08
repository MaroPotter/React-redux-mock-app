import Editor from '../src/components/Editor.js';
import ArticleList from '../src/components/ArticleList';
import React from 'react';
import {BrowserRouter, Link, Router} from 'react-router-dom';
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {Provider, ReactReduxContext} from "react-redux";
import {store} from "../src/store.js";
import {createStore} from "redux";
import editor from '../src/reducers/editor.js';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import {
    EDITOR_PAGE_LOADED,
    EDITOR_PAGE_UNLOADED,
    ARTICLE_SUBMITTED,
    ASYNC_START,
    ADD_TAG,
    REMOVE_TAG,
    UPDATE_FIELD_EDITOR
} from '../src/constants/actionTypes';

const mockStore = configureStore([]);

const startingState = {
    articleSlug: 'slug',
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
    }
}

// function rendersWithRedux(store: any) {
//     return {
//         ...render(<Provider store={store}><Editor/></Provider>)
//     };
// }





describe('src/components/Editor.js', () => {

    it('should return the initial state', () => {

        expect(editor(undefined, {})).toEqual({});

        // render(<Provider store={store}><Editor/></Provider>);

    });

    it('should handle EDITOR_PAGE_UNLOADED', () => {
        expect(editor(undefined, {type: EDITOR_PAGE_UNLOADED})).toEqual({});

    });

    it('should handle EDITOR_PAGE_LOADED', () => {
        expect(editor
            (undefined, {
                    type: EDITOR_PAGE_LOADED,
                    payload: {
                        article: {
                            slug: 'slug',
                            title: 'title',
                            description: 'description',
                            body: 'body',
                            tagList: 'tagList'
                        }
                    }
                }
            )
        ).toEqual({
            articleSlug: 'slug',
            title: 'title',
            description: 'description',
            body: 'body',
            tagInput: '',
            tagList: 'tagList'
        });

    });

    it('should render the Editor component', () => {

        // render(<Provider store={createStore(editor, {
        //     articleSlug: 'slug',
        //     title: 'title',
        //     description: 'description',
        //     body: 'body',
        //     tagInput: '',
        //     tagList: 'tagList',
        //     match: {
        //         params: {
        //             slug: 'slugInMatchParams'
        //         }
        //     }
        // })}><Editor/></Provider>);

        // render(<Provider store={createStore(editor, {
        //     articleSlug: 'slug',
        //     title: 'title',
        //     description: 'description',
        //     body: 'body',
        //     tagInput: 'tagInput',
        //     tagList: 'tagList',
        //     match: {
        //         params: {
        //             slug: 'tytul'
        //         },
        //         path: '/editor/tytul',
        //         url: '/editor/tytul',
        //         isExact: true
        //     }
        // })}><Editor/></Provider>);
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