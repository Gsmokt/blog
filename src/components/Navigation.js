import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AppBar, Stack, Link as MaterialLink, Button, Typography } from '@mui/material';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';


const Navigation = ({isLogged, setIsLogged}) => {
    const navigate = useNavigate();
    const userSignOut = () => {
        signOut(auth)
        .then(() => {
          localStorage.clear();
          setIsLogged(false);
          navigate('/login');
        })
    }

    return (
        
        <AppBar>
                <Stack justifyContent="center" direction='row' spacing={2} m={4}>
                    <MaterialLink fontSize='20px' component={RouterLink} underline='none' color='inherit' to='/'>Home</MaterialLink>
                    {isLogged && <MaterialLink fontSize='20px' component={RouterLink} underline='none' color='inherit' to='/createpost'>Create post</MaterialLink>}
                    {!isLogged ? <MaterialLink fontSize='20px' component={RouterLink} underline='none' color='inherit' to='/login'>Login</MaterialLink> 
                               : 
                                 <Button onClick={userSignOut} sx={{ padding: 0, textTransform: 'none'}}> <Typography sx={{fontSize: '20px', color: 'white', paddingTop: '1px' }} variant="body2">Logout</Typography></Button>
                    }
                </Stack>
        </AppBar>
   
    );
};

export default Navigation;