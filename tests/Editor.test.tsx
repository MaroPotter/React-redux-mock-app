import Editor from '../src/components/Editor.js';
import ArticleList from '../src/components/ArticleList';
import React from 'react';
import {BrowserRouter, Link, Router} from 'react-router-dom';
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {Provider, ReactReduxContext} from "react-redux";
import {createStore} from "redux";
import editor from '../src/reducers/editor.js';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {promiseMiddleware, localStorageMiddleware} from '../src/middleware.js';
import {
    EDITOR_PAGE_LOADED,
    EDITOR_PAGE_UNLOADED,
    ARTICLE_SUBMITTED,
    ASYNC_START,
    ADD_TAG,
    REMOVE_TAG,
    UPDATE_FIELD_EDITOR
} from '../src/constants/actionTypes';


describe('src/reducers/editor.js', () => {

    it('should return the initial state', () => {
        expect(editor(undefined, {})).toEqual({});
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

});

describe('src/components/Editor.js', () => {

    const mockStore = configureStore([promiseMiddleware, localStorageMiddleware]);
    const startingState = {
        editor: {
            articleSlug: 'slug',
            title: 'title',
            description: 'description',
            body: 'body',
            tagInput: 'tagInput',
            tagList: ['tagList'],
            match: {
                params: {
                    slug: 'tytul'
                },
                path: '/editor/tytul',
                url: '/editor/tytul',
                isExact: true
            }
        }
    };
    // function rendersWithRedux(store: any) {
//     return {
//         ...render(<Provider store={store}><Editor/></Provider>)
//     };
// }

    it('can be rendered', () => {

        let store;
        let component;
        store = mockStore(startingState);
        component = renderer.create(
            <Provider store={store}>
                <Editor/>
            </Provider>);

        // render(<Provider store={store}><Editor/></Provider>);

        // render(<Provider store={createStore(editor, {editor: {
        //     articleSlug: 'slug',
        //     title: 'title',
        //     description: 'description',
        //     body: 'body',
        //     tagInput: '',
        //     tagList: [''],
        //     match: {
        //         params: {
        //             slug: 'slugInMatchParams'
        //         }
        //     }
        // }})}><Editor/></Provider>);
    });


});