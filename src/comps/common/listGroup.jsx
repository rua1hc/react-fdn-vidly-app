import React, { Component } from "react";

class ListGroup extends Component {
    // state = {  }
    render() {
        const {
            items,
            textProperty,
            valueProperty,
            selectedItem,
            onItemSelect,
        } = this.props;
        // console.log(items);

        return (
            <ul className="list-group">
                {/* <li className="list-group-item">All Genres</li> */}
                {items.map((item) => (
                    <li
                        key={item[valueProperty]}
                        className={
                            selectedItem === item
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        onClick={() => onItemSelect(item)}
                    >
                        {item[textProperty]}
                    </li>
                ))}
            </ul>
        );
    }
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id",
};

export default ListGroup;
