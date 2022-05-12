import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsLogged}) => {
    const navigate = useNavigate();
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((response) => {
              localStorage.setItem('isLogged', true);
              setIsLogged(true);
              navigate('/');
            })
    }
    return (
        <div>
            <Grid item container sx={{ height: '100vh', width: '100%' }} alignItems='center' justifyContent="center" direction="column">
                <Typography mb={4} variant='h4' gutterBottom >Continue With Google</Typography>
                <Button onClick={signIn} variant="outlined" startIcon={<GoogleIcon />}>
                Sign In with Google
                </Button>
            </Grid>
            
        </div>
    );
};

export default Login;