import React from 'react';
import {Avatar,Container,makeStyles,Typography,TextField,Button,FormControlLabel,Checkbox,Grid,Link,Box} from '@material-ui/core';
import {LockOutlined} from '@material-ui/icons'

const useStyle=makeStyles((theme)=>({
    paper:{
        marginTop: theme.spacing(8),
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    avatr:{
        marginBottom:theme.spacing(1),
        backgroundColor:theme.palette.primary.main
    },
    icon:{
        backgroundColor:"theme.palette.secondary.main"
    },
    form:{
        width:"100%",
       marginTop:theme.spacing(1)
    },
    submit:{
        margin:theme.spacing(3,0,2),
        padding:theme.spacing(.8)
    }
}))

function SignIn(){
    const classes=useStyle();
    return(
       <Container component="main" maxWidth='xs'>
        <div className={classes.paper}>
          <Avatar className={classes.avatr}>
           <LockOutlined className={classes.icon}/>
          </Avatar>
           
           <Typography component="h1" variant="h5">Sign In</Typography>

          <form className={classes.form}>
          <TextField
          fullWidth
          required
          margin="normal"
          autoFocus
          label="Email Address"
          type="email"
          variant="outlined"
        />
        <TextField
         required
         fullWidth
         margin="normal"
         label="Password"
         type="password"
         variant="outlined"
        />
          
        <FormControlLabel control={<Checkbox color="primary"/> } label="remember me"/>
         <Button variant="contained" fullWidth color="primary" type="submit" className={classes.submit} >Sign in</Button> 


        <Grid container>
        <Grid item xs><Link href="#" variant="body2">Forgot Password?</Link></Grid>   
        <Grid item><Link href="#" variant="body2">Don't have an account? Sign Up</Link></Grid>   
        </Grid>
          </form>
         <Box mt={8}>
         <Typography variant="body2" color="textPrimary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
         </Box>
         

        </div>
       </Container>
    )
}

export default SignIn;