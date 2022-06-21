import React, { Component } from "react";

import _ from "lodash";

class Pagination extends Component {
    // state = {  }

    render() {
        const { totalItems, pageSize, currentPage, onPageChange } = this.props;
        console.log(currentPage);

        const pagesCount = Math.ceil(totalItems / pageSize);
        if (pagesCount === 1) return null;
        const pages = _.range(1, pagesCount + 1);

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}

                    {pages.map((page) => (
                        <li
                            key={page}
                            className={
                                page === currentPage
                                    ? "page-item active"
                                    : "page-item"
                            }
                        >
                            <a
                                className="page-link"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))}

                    {/* <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li> */}
                    {/* <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                    {/* <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
                </ul>
            </nav>
        );
    }
}

export default Pagination;
