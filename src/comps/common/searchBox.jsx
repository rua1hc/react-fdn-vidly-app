import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
    return (
        <input
            className="form-control"
            placeholder="Search..."
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
        />
    );
};

export default SearchBox;
