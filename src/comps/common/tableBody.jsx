import React, { Component } from "react";

import Like from "./like";

import _ from "lodash";

class TableBody extends Component {
    // state = {  }

    renderCell = (item, col) => {
        if (col.content) {
            return col.content(item);
        }

        return _.get(item, col.path);
    };

    render() {
        const { data, columns, onLike, onDelete } = this.props;

        return (
            <tbody>
                {data.map((item) => (
                    <tr key={item._id}>
                        {columns.map((col) => (
                            <td key={col.path || col.key}>
                                {this.renderCell(item, col)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        );

        // <td>{item.title}</td>
        // <td>{item.genre.name}</td>
        // <td>{item.numberInStock}</td>
        // <td>{item.dailyRentalRate}</td>
        // <td>
        //     {/* <button type="button" class="btn btn-dark"> */}
        //     <Like
        //         onClick={() => onLike(item)}
        //         liked={item.liked}
        //     />
        //     {/* </button> */}
        // </td>
        // <td>
        //     <button
        //         onClick={() => onDelete(item)}
        //         className="btn btn-danger"
        //     >
        //         Delete
        //     </button>
        // </td>
    }
}

export default TableBody;
