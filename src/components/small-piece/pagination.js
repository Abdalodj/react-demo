import React from "react";

export const Pagination = (props) => {
    console.log('test')
    return (<nav aria-label="Page navigation example">
            <ul className="pagination d-flex flex-wrap">
                {
                    props.pageCount.map(
                        (x, index) => <li
                            key={index}
                            className={((index+1) === props.page) ? 'page-item active' : 'page-item'}
                            aria-current={((index+1) === props.page) ? 'page' : ''}
                        >
                            <button
                                className="page-link"
                                onClick={() => props.goToPage(index+1)}>
                                {index+1}
                            </button>
                        </li>
                    )
                }
            </ul>
        </nav>)
}