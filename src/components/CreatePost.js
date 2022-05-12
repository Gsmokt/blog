import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [title, setTitle] = useState();
    const [post, setPost] = useState();
    const navigate = useNavigate();
    const appCollection = collection(db, 'posts')

    const createPost = async () => {
      await addDoc(appCollection, {title, post, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}});
      navigate('/');
      console.log('hello')
    }

    return (
        <Container>
            <Box display='flex' sx={{height: '100vh', width: '100%'}} justifyContent='center' alignItems='center' >
                <Grid sx={{width: '50%'}} container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                    <Grid  item>
                        <Typography variant='h5'>Create new post</Typography>
                    </Grid>
                    <Grid sx={{width: '100%'}} item>
                        <TextField onChange={(e) => setTitle(e.target.value)} fullWidth label="Title" id="fullWidth" />
                    </Grid>
                    <Grid sx={{width: '100%'}} item>
                        <TextField onChange={(e) => setPost(e.target.value)} fullWidth id="fullWidth" label="Post" multiline rows={10} />
                    </Grid>
                    <Grid sx={{width: '100%'}} display='flex' justifyContent='center' item >
                    <Button onClick={createPost} variant="outlined" endIcon={<SendIcon />}>
                        Send
                    </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default CreatePost;