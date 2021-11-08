import React from 'react'
import shortid from "shortid";
import '../App.css';

function Pagination({ pagCount, paginate }) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-grid">
                {
                    Array(Math.ceil(pagCount)).fill(" ").map((number, index) => {
                        return (
                            <li key={shortid.generate()} className="page-item"><a className="page-link" onClick={() => paginate(index + 1)} href="!#">{index + 1}</a></li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Pagination;
