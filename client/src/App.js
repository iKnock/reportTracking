import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from './ProTip';
import Copyright from './component/Copyright'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import Home from './container/Home'
import Landing from './container/Landing'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Indie Flower',
      'cursive',
    ].join(','),
  },
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Landing />        
      </div>
    </ThemeProvider>
  );

  {/*
     {/*<Container maxWidth="sm">*/ }
  {/*<Box sx={{ my: 12 }}>*/ }
  {/*<Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-alpha example
        </Typography>
        <ProTip />*/}

  {/*<SignIn />
        <br />
        <SignUp />*/}
  <br />

  {/*</Box>*/ }
  {/*</Container>*/ }

}
