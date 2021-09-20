import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';
import { MuiThemeProvider } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import React from 'react';


const FormPersonalDetails = (props) => {
    return (
        <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Personal Forms"/>
                    <TextField hintText="Occupation    "  floatingLabelText="Occupation" onChange= {props.handleChange('occupation')} value= {props.values.occupation}/>
                    <br/>
                    <TextField hintText="Enter your City    "  floatingLabelText="City" onChange= {props.handleChange('city')} value= {props.values.city}/>
                    <br/>

                    <TextField hintText="Hobbies    "  floatingLabelText="What are your hobbies?" onChange= {props.handleChange('hobbies')} value= {props.values.hobbies}/>
                    <br/>

                    <TextField hintText="Enter your Bio    "  floatingLabelText="Bio" onChange= {props.handleChange('bio')} value= {props.values.bio}/>
                    <br/>
                    <br/> 
                    <RaisedButton label="Continue" primary={true} onClick={props.nextStep}/>
                    
                    <RaisedButton label="Back" primary={false} onClick={props.previousStep}/>
                </React.Fragment>
            </MuiThemeProvider>
    )
}

export default FormPersonalDetails;

