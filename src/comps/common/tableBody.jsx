import React, { Component } from "react";

import Like from "./like";

class TableBody extends Component {
    // state = {  }
    render() {
        const { data, columns, onLike, onDelete } = this.props;

        return (
            <tbody>
                {data.map((item) => (
                    <tr key={item._id}>
                        {columns.map((col) => (
                            <td>{item[col.path]}</td>
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
