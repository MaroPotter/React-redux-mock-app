import Header from '../src/components/Header.js';
import React from 'react';
import {BrowserRouter, Link, Router} from 'react-router-dom';
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';


describe('src/components/Header.js', () => {

    const mockHeaderProps = {
        appName: 'mockName',
        currentUser: 'mockUser'
    }

    it('renders without crashing and returns LoggedInView', () => {


        render(<BrowserRouter><Header appName={mockHeaderProps.appName} currentUser={mockHeaderProps.currentUser}></Header></BrowserRouter>);
        expect(screen.queryByRole('navigation')).toBeInTheDocument();
        expect(screen.queryByText('mockname')).toBeInTheDocument();
        expect(screen.queryByRole('list')).toBeInTheDocument();
        expect(screen.queryByText('Sign in')).not.toBeInTheDocument();
        expect(screen.queryByText('Settings')).toBeInTheDocument();



    });
    it('should return LoggedOutView when loaded/passing props.currentUser does not exist', () => {
        render(<BrowserRouter><Header appName={mockHeaderProps.appName} currentUser={null}></Header></BrowserRouter>);

        expect(screen.queryByText('mockname')).toBeInTheDocument();
        expect(screen.queryByText('Sign in')).toBeInTheDocument();
        expect(screen.queryByText('Settings')).not.toBeInTheDocument();

        const header = screen.queryByRole('navigation');
        const loggedOutView = screen.queryByRole('list');

        expect(header).toBeInTheDocument();
        expect(loggedOutView).toBeInTheDocument();
        expect(loggedOutView).toContainHTML('<a class="nav-link" href="/login">Sign in</a>')

    });
});
