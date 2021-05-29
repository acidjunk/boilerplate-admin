import React, { useCallback, useEffect, useState } from "react";
import { useVersion } from "react-admin";
import { Tab, TabbedShowLayout } from "react-admin";

const Dashboard = () => {
    const [state, setState] = useState({});
    // const version = useVersion();

    return (
        <TabbedShowLayout syncWithLocation={false}>
            <Tab label="Users">
                Todo: show users
            </Tab>
            <Tab label="Permissions">
                Todo: show permissions
            </Tab>
        </TabbedShowLayout>
    );
};

export default Dashboard;
