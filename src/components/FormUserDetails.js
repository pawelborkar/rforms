import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';
import { MuiThemeProvider } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import React from 'react';


const FormUserDetails = (props) => {
    const { handleChange, values, nextStep } = props
    return (
        <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Personal Forms"/>
                    <TextField hintText="Enter your First Name    "  floatingLabelText="First Name" onChange= {handleChange('firstName')} value= {values.firstName}/>
                    <br/>
                    <TextField hintText="Enter your Last Name    "  floatingLabelText="Last Name" onChange= {handleChange('lastName')} value= {values.lastName}/>
                    <br/>

                    <TextField hintText="Enter your Email    "  floatingLabelText="Email" onChange= {handleChange('email')} value= {values.email}/>
                    <br/>
                    <br/> 
                    <RaisedButton label="Continue" primary={true} onClick={nextStep}/>
                </React.Fragment>
            </MuiThemeProvider>
    )
}

export default FormUserDetails

