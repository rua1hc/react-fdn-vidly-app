import React, { Component } from "react";

class Select extends Component {
    // state = {  }
    render() {
        const { name, label, error, options, ...rest } = this.props;

        return (
            <div>
                <label htmlFor={name}>{label}</label>
                <select
                    name={name}
                    id={name}
                    {...rest}
                    className="form-select form-select-md my-2"
                >
                    {options.map((opt) => (
                        <option key={opt._id} value={opt._id}>
                            {opt.name}
                        </option>
                    ))}
                </select>

                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        );
    }
}

export default Select;
