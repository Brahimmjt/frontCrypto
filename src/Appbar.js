import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" className={classes.title}>
                        <a href="Rsa" style={{ color: "white", fontWeight: "bold", fontSize: "17px", textDecoration: "none" }}>RSA</a>
                    </Button>
                    <Button color="inherit" className={classes.title}>
                        <a href="Affine" style={{ color: "white", fontWeight: "bold", fontSize: "17px", textDecoration: "none" }}>Affine</a>
                    </Button>
                    <Button color="inherit" className={classes.title}>
                        <a href="Hill" style={{ color: "white", fontWeight: "bold", fontSize: "17px", textDecoration: "none" }}>Hill</a>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
