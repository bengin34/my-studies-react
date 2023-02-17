

//!! This page uses Material UI framework 
//!! You need to write these lines to the Terminal
//*** For NPM   copy this
// npm install @mui/material @emotion/react @emotion/styled
//*** For yarn   copy this
// yarn add @mui/material @emotion/react @emotion/styled


import React from 'react'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

function DisplayLoggedOut() {
    return (
        <div style={{ background: 'green' }}>
            <h1 style={{ color: 'white' }}> Please Login</h1>
        </div>
    )
}

function DisplayLoggedIn() {
    return (
        <div >
            <div style={{ background: 'green' }}>
                <h1 style={{ color: 'white' }}> You are Logged In</h1>
            </div>
            <h3>Courses available on GeeksforGeeks</h3>
            <div style={{ display: 'inline' }}>
                <Card sx={{ maxWidth: 345 }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://www.geeksforgeeks.org/wp-content/uploads/Java.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5"
                                component="div">
                                Java
                            </Typography>
                            <Typography variant="body2"
                                color="text.secondary">
                                The Java codes are first compiled into byte
                                code (machine-independent code). Then the byte
                                code runs on Java Virtual Machine (JVM)
                                regardless of the underlying architecture.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}


function Rendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginButton = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
        }
        else {
            setIsLoggedIn(true);
        }
    }
    return (
        <div>
            <h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
            <h3>Conditionally Rendering Components in React</h3>
            {isLoggedIn == false ? <DisplayLoggedOut /> : <DisplayLoggedIn />}
            <button onClick={handleLoginButton} className="btn btn-primary">
                {isLoggedIn == false ? 'Log In' : 'Log Out'}
            </button>
        </div>
    )
}

export default Rendering;