import React, { Component } from "react";

class ListGroup extends Component {
    // state = {  }
    render() {
        const { genres, currentListGroup, onListGroupSelect } = this.props;
        // console.log(genres);

        return (
            <ul className="list-group">
                {/* <li className="list-group-item">All Genres</li> */}
                {genres.map((genre) => (
                    <li
                        className={
                            currentListGroup === genre
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        onClick={() => onListGroupSelect(genre)}
                    >
                        {genre.name}
                    </li>
                ))}
            </ul>
        );
    }
}

export default ListGroup;
