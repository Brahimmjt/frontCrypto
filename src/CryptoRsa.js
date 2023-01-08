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

export default function CryptoRsa() {
    const paperStyle = {
        padding: '20px', width: 720, margin: "20px auto",
    }

    const [pValue, setpValue] = useState('')
    const [qValue, setqValue] = useState('')
    const [eValue, seteValue] = useState('')
    const [message, setMessage] = useState('')
    const [dApostrophe, setdApostrophe] = useState('')
    const [signature, setSignature] = useState('')


    const [informations, setInformations] = useState([])
    const classes = useStyles();

    const handleClick = (e) => {
        e.preventDefault()
        const rsa = { pValue, qValue, eValue, message, dApostrophe, signature }
        fetch("http://localhost:8080/crypto/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(rsa)
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
                <h2 style={{ color: "blue", fontWeight: "bold" }}><u>Crypto-RSA</u></h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Value of p" variant="outlined"
                        value={pValue}
                        onChange={(e) => setpValue(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Value of q" variant="outlined"
                        value={qValue}
                        onChange={(e) => setqValue(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Value of e" variant="outlined"
                        value={eValue}
                        onChange={(e) => seteValue(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Message" variant="outlined" fullWidth
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Value of d'" variant="outlined"
                        value={dApostrophe}
                        onChange={(e) => setdApostrophe(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Signature" variant="outlined"
                        value={signature}
                        onChange={(e) => setSignature(e.target.value)}
                    /><br />
                    <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
                </form>
                {signature}<br />
                {message}
            </Paper>
            <Paper elevation={3} style={paperStyle}>
                {informations.map(rsa => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={rsa.id}>
                        Id:{rsa.id}<br />
                        Message Crypte:{rsa.messageCryp}<br />
                    </Paper>
                ))}
                Notre Message Crypte Va Apparaitre Ici
            </Paper>
        </Container>
    );
}