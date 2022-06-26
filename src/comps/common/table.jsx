import React from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data, onLike, onDelete }) => {
    // const { columns, sortColumn, onSort, data, onLike, onDelete } = props;
    return (
        <table className="table">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />

            <TableBody
                data={data}
                columns={columns}
                onLike={onLike}
                onDelete={onDelete}
            />
        </table>
    );
};

export default Table;
