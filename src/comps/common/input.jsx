import React from "react";

const Input = ({ name, label, value, error, onChange }) => {
    return (
        <div>
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                // ref={this.React_username}
                id={name}
                type="text"
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;
