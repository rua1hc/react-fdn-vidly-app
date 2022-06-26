import React, { Component } from "react";

// import Like from "./like";

import _ from "lodash";

// import { Link } from "react-router-dom";

class TableBody extends Component {
    // state = {  }

    renderCell = (item, col) => {
        if (col.content) {
            return col.content(item);
        }

        // if (col.path === "title") {
        //     return (
        //         <Link to={`/movies/${item._id}`}>{_.get(item, col.path)}</Link>
        //     );
        // }

        return _.get(item, col.path);
    };

    createCustomeKey = (item, col) => {
        return item._id + (col.path || col.key);
    };

    render() {
        const { data, columns } = this.props;

        return (
            <tbody>
                {data.map((item) => (
                    <tr key={item._id}>
                        {columns.map((col) => (
                            <td key={this.createCustomeKey(item, col)}>
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
