import { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
    state = {
        data: {},
        errors: {},
    };

    validateInputs = () => {
        const { data } = this.state;
        const options = { abortEarly: false };

        let { error } = Joi.validate(data, this.schema, options);
        if (!error) return null;

        let errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;

        return errors;
    };

    validateProperty = ({ name, value }) => {
        const inputField = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(inputField, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // const DOM_username = document.getElementById("username").value;
        // const username = this.React_username.current.value;

        const errors = this.validateInputs();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        let errors = { ...this.state.errors };
        let errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        let data = { ...this.state.data };
        // data.username = e.currentTarget.value;
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    // render() {
    //     return (
    //         <div>
    //         </div>
    //     );
    // }
}

export default Form;
