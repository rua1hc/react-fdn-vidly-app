import React, { Component } from "react";

class TableHeader extends Component {
    raiseSort = (path) => {
        let sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    };

    renderSortIcon = (col) => {
        if (col.path !== this.props.sortColumn.path) {
            return null;
        }
        if (this.props.sortColumn.order === "asc") {
            return <i className="fa fa-sort-asc"></i>;
        } else {
            return <i className="fa fa-sort-desc"></i>;
        }
    };

    render() {
        const { columns } = this.props;
        return (
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th
                            className="clickable"
                            key={col.path || col.key}
                            onClick={() => this.raiseSort(col.path)}
                        >
                            {col.label}
                            {this.renderSortIcon(col)}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;
