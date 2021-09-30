import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import { MuiThemeProvider } from "material-ui/styles";
import TextField from "material-ui/TextField";
import React from "react";

const FormPersonalDetails = (props) => {
    const { handleChange, nextStep, previousStep } = props;
    const { occupation, city, hobbies, bio } = props.values;
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Personal Forms" />
                <TextField
                    hintText="Occupation    "
                    floatingLabelText="Occupation"
                    onChange={handleChange("occupation")}
                    value={occupation}
                />
                <br />
                <TextField
                    hintText="Enter your City    "
                    floatingLabelText="City"
                    onChange={handleChange("city")}
                    value={city}
                />
                <br />

                <TextField
                    hintText="Hobbies    "
                    floatingLabelText="What are your hobbies?"
                    onChange={handleChange("hobbies")}
                    value={hobbies}
                />
                <br />

                <TextField
                    hintText="Enter your Bio    "
                    floatingLabelText="Bio"
                    onChange={handleChange("bio")}
                    value={bio}
                />
                <br />
                <br />
                <RaisedButton
                    label="Continue"
                    primary={true}
                    onClick={nextStep}
                />

                <RaisedButton
                    label="Back"
                    primary={false}
                    onClick={previousStep}
                />
            </React.Fragment>
        </MuiThemeProvider>
    );
};

export default FormPersonalDetails;
