import React, { useState, useEffect } from 'react';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const Home = ({isLogged}) => {
    const [posts, setPosts] = useState([]);
    const appCollection = collection(db, 'posts');

    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(appCollection);
        setPosts(data.docs.map(e => ({...e.data(), id: e.id})));
      }
      getPosts();
    });

    const deletePost = async (id) => {
      const post = doc(db, 'posts', id);
      await deleteDoc(post);
    }
    return (
    
          <Box display='flex' sx={{height: '100vh', width: '100%'}} justifyContent='center' >
            <Grid container sx={{width: '80%', marginTop: '100px'}} justifyContent='center' direction="row"  >
            {posts.map(e => {
                return <Grid item key={e.author.id} >
                          <Card sx={{ width: 350, height: 260, margin: '10px', padding: '5px' }} >
                            <Box sx={{width: '100%', height: '100%', display: 'inline-grid', gridTemplateRows: '1fr 3fr 1fr'}}  >
                              <Typography  gutterBottom variant="h5" component="div">
                                {e.title}
                              </Typography>
                              <Typography overflow="hidden"  variant="body2" color="text.secondary">
                                {e.post}
                              </Typography>
                              <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                              <Typography sx={{fontWeight: 'bold', display: 'flex', alignItems: 'center'}} variant="subtitle2" color="text.secondary">
                                {`@ ${e.author.name}`}
                              </Typography>
                              {isLogged && e.author.id === auth?.currentUser?.uid && <IconButton onClick={() => deletePost(e.id)} size='large' aria-label="delete" color="primary" >
                                <DeleteForeverIcon />
                              </IconButton>}
                              </Box>
                            </Box>
                          </Card>
                       </Grid>
            })}  
            </Grid>
          </Box>
        
    );
};

export default Home;