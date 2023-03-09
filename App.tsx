import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'
// import Paper from '@mui/material/Paper'
import StepForm from './components/StepForm'
// import { ImageList } from '@mui/material'
// import Header from './components/Header'
// import Footer from './components/Footer'


/**
 * Old Js version
 * https://codesandbox.io/s/react-material-ui-step-form-forked-578lz
 *
 * Repo: https://github.com/awran5/react-material-ui-step-form
 */

const theme = createTheme()

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Header /> */}
      <Container component='main' maxWidth='xl' sx={{ my: { xs: 3, md: 9, borderRadius: 18 }, p: { xs: 2, md: 5 } }} >
            {/* <Paper elevation={12} sx={{ my: { xs: 3, md: 9, borderRadius: 18 }, p: { xs: 2, md: 5 } }}> */}
        <Grid container spacing={2} columns={16}>
          <Grid item xs={7}>
            <img src='https://c4.wallpaperflare.com/wallpaper/700/719/787/anime-one-piece-nico-robin-wallpaper-preview.jpg'
            alt='sexy'/>
            </Grid>
            <Grid item xs={8}>
          <StepForm />
            </Grid>
        </Grid>
        {/* </Paper> */}
      </Container>
    </ThemeProvider>
  )
}
