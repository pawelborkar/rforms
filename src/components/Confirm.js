import AppBar from "material-ui/AppBar";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import RaisedButton from "material-ui/RaisedButton";
import { MuiThemeProvider } from "material-ui/styles";
import React from "react";

const Confirm = (props) => {
    const {
        values: { firstName, lastName, email, occupation, city, bio, hobbies },
        previousStep,
        nextStep,
    } = props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Personal Forms" />
                <List>
                    <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                    />
                    <ListItem
                        primaryText="Last Name"
                        secondaryText={lastName}
                    />
                    <ListItem primaryText="Email" secondaryText={email} />
                    <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                    />
                    <ListItem primaryText="City" secondaryText={city} />
                    <ListItem primaryText="Hobbies" secondaryText={hobbies} />
                    <ListItem primaryText="Bio" secondaryText={bio} />
                </List>

                <br />
                <br />
                <RaisedButton
                    label="Confirm & Continue"
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

export default Confirm;
