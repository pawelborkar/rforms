import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
class UserForm extends Component {
    //State
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        occupation: "",
        city: "",
        bio: "",
        hobbies: "",
    };

    // Next Step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    // Previous State
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    // HandleChange

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value }); // Setting the value as input which we got from the event parameter.
    };

    render() {
        const { step, firstName, lastName, age, email, occupation, city, bio, hobbies } =
            this.state;

        const values = {
            step,
            firstName,
            lastName,
            age,
            email,
            occupation,
            city,
            bio,
            hobbies,
        };
        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return(<FormPersonalDetails
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    handleChange={this.handleChange}
                    values={values}
                />);
            case 3:
                return(<Confirm
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    values={values}
                />);
            case 4:
                return(<Success
                    
                    values={values}
                />);            default:
                return "";
        }
    }
}

export default UserForm;
