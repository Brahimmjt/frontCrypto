import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function CryptoAffine() {
    const paperStyle = {
        padding: '20px', width: 720, margin: "20px auto",
    }

    const [aValue, setpValue] = useState('')
    const [bValue, setqValue] = useState('')
    const [message, setMessage] = useState('')

    const [informations, setInformations] = useState([])
    const classes = useStyles();

    const handleClick = (e) => {
        e.preventDefault()
        const affine = { aValue, bValue, message }
        fetch("http://localhost:8080/crypto/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(affine)
        }).then(() => {
            console.log("Informations added")
        })
    }

    // useEffect(() => {
    //     fetch("http://localhost:8080/crypto/getAll")
    //         .then(res => res.json())
    //         .then(result => {
    //             setInformations(result);
    //         })
    // }, [])

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h2 style={{ color: "blue", fontWeight: "bold" }}><u>Crypto-Affine</u></h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Value of a" variant="outlined"
                        value={aValue}
                        onChange={(e) => setpValue(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Value of b" variant="outlined"
                        value={bValue}
                        onChange={(e) => setqValue(e.target.value)}
                    />

                    <TextField id="outlined-basic" label="Message" variant="outlined" fullWidth
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
                </form>
                <br />
                {message}
            </Paper>
            <Paper elevation={3} style={paperStyle}>
                {informations.map(affine => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={affine.id}>
                        Id:{affine.id}<br />
                        Message Crypte:{affine.messageCryp}<br />
                    </Paper>
                ))}
                Notre Message Crypte Va Apparaitre Ici
            </Paper>
        </Container>
    );
}