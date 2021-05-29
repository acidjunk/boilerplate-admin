import * as React from "react";
import { Layout, LayoutProps, Sidebar } from "react-admin";
import { useSelector } from "react-redux";

import { AppState } from "../types";
import AppBar from "./AppBar";
import { darkTheme, lightTheme } from "./themes";

export default (props: LayoutProps) => {
    const theme = useSelector((state: AppState) => (state.theme === "dark" ? darkTheme : lightTheme));
    return <Layout {...props} appBar={AppBar} theme={theme} />;
};
