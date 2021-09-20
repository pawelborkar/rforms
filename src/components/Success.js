import AppBar from 'material-ui/AppBar'
import { MuiThemeProvider } from 'material-ui/styles'
import React from 'react'

const Success = ({values:{firstName}}) => {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Personal Forms"/>
                <h1>Thank You For Your Submission {firstName}</h1>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default Success
