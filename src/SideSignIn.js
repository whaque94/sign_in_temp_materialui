import React from 'react';
import { makeStyles,Grid,Avatar,Typography,TextField,FormControlLabel,Paper,Checkbox,Link,Button,Box} from '@material-ui/core';
import {LockOutlined} from '@material-ui/icons'
const useStyle=makeStyles((theme)=>({
    root:{height:"100vh"},
    grdImg:{
         backgroundImage:"url(https://source.unsplash.com/random)",
         backgroundPosition:"center",
         backgroundSize:"cover",
         backgroundRepeat:"no-repeat"
    },
    paper:{
        margin: theme.spacing(8, 4),
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    Avtr:{
        margin:theme.spacing(2),
        backgroundColor:theme.palette.primary.main
    },
    form:{
        width:'100%'
    },
    grdDiv:{
        margin:theme.spacing(1)
    }
}))


function SideSignIn(){
    const classes=useStyle();
    return(
     <Grid container component="main" className={classes.root}>
      <Grid item xs={false} md={7} className={classes.grdImg}></Grid>
      <Grid item xs={12} md={5} component={Paper}>
          <div className={classes.paper}>
          <Avatar className={classes.Avtr}><LockOutlined/></Avatar>
       <Typography component="h1" variant="h5">Sign In</Typography>
        <form className={classes.form}>
         <TextField variant="outlined" required type="email" label="Email Address" autoFocus fullWidth margin="normal"/>
         <TextField variant="outlined" required type="password" label="Password" fullWidth margin="normal"/>
         <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="remember me"/>

         <Grid container  className={classes.grdDiv}>
          <Grid item xs><Link href="#" variant="body2">Forgot Password</Link></Grid> 
          <Grid item><Link href="#" variant="body2">Don't have an account? Sign Up</Link></Grid>    
         </Grid>
          
        <Button variant="contained" color="primary"  fullWidth>Sign In</Button>

         <Box mt={5}>
           <Typography variant="body2" align="center" color="primary">{'Copyright © '}<Link href="#">MY_company</Link>.{new Date().getFullYear()}</Typography>  
         </Box>
        </form>
          </div>
      
      </Grid>
     </Grid>
    )
}

export default SideSignIn;