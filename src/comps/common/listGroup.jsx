import React, { Component } from "react";

class ListGroup extends Component {
    // state = {  }
    render() {
        const {
            genres,
            textProperty,
            valueProperty,
            currentListGroup,
            onListGroupSelect,
        } = this.props;
        // console.log(genres);

        return (
            <ul className="list-group">
                {/* <li className="list-group-item">All Genres</li> */}
                {genres.map((genre) => (
                    <li
                        key={genre[valueProperty]}
                        className={
                            currentListGroup === genre
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        onClick={() => onListGroupSelect(genre)}
                    >
                        {genre[textProperty]}
                    </li>
                ))}
            </ul>
        );
    }
}

export default ListGroup;
