import * as React from 'react';
import { useSelector } from 'react-redux';
import { Layout, LayoutProps, Sidebar } from 'react-admin';
import AppBar from './AppBar';
import { darkTheme, lightTheme } from './themes';
import { AppState } from '../types';

export default (props: LayoutProps) => {
    const theme = useSelector((state: AppState) =>
        state.theme === 'dark' ? darkTheme : lightTheme
    );
    return (
        <Layout
            {...props}
            appBar={AppBar}
            theme={theme}
        />
    );
};
