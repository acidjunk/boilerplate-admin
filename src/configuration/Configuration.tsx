import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { Title, useLocale, useSetLocale, useTranslate } from "react-admin";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../types";
import { changeTheme } from "./actions";

const useStyles = makeStyles({
    label: { width: "10em", display: "inline-block" },
    button: { margin: "1em" },
});

const Configuration = () => {
    const translate = useTranslate();
    const locale = useLocale();
    const setLocale = useSetLocale();
    const classes = useStyles();
    const theme = useSelector((state: AppState) => state.theme);
    const dispatch = useDispatch();
    return (
        <Card>
            <Title title={translate("pos.configuration")} />
            <CardContent>
                <div className={classes.label}>Theme</div>
                <Button
                    variant="contained"
                    className={classes.button}
                    color={theme === "light" ? "primary" : "default"}
                    onClick={() => dispatch(changeTheme("light"))}
                >
                    Light
                </Button>
                <Button
                    variant="contained"
                    className={classes.button}
                    color={theme === "dark" ? "primary" : "default"}
                    onClick={() => dispatch(changeTheme("dark"))}
                >
                    Dark
                </Button>
            </CardContent>
            <CardContent>
                <div className={classes.label}>Language</div>
                <Button
                    variant="contained"
                    className={classes.button}
                    color={locale === "nl" ? "primary" : "default"}
                    onClick={() => setLocale("nl")}
                >
                    nl
                </Button>
                <Button
                    variant="contained"
                    className={classes.button}
                    color={locale === "en" ? "primary" : "default"}
                    onClick={() => setLocale("en")}
                >
                    en
                </Button>
            </CardContent>
        </Card>
    );
};

export default Configuration;
