import React from "react";

// const Input = ({ type, name, label, value, error, onChange }) => {
const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="mb-2">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                // type={type}
                // value={value}
                // onChange={onChange}
                name={name}
                {...rest}
                id={name}
                // ref={this.React_username}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;
