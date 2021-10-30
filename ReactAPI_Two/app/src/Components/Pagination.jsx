import React from 'react'
import shortid  from "shortid";
import '../App.css';

function Pagination({pagCount,paginate}) {
    const pageNumbers = [];
    for(let i=1; i<=pagCount;i++) {
        pageNumbers.push(i);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-grid">
                {
                    pageNumbers.map((number) => {
                        return (
                            <li key={shortid.generate()} className="page-item"><a className="page-link" onClick={() => paginate(number)} href="!#">{number}</a></li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Pagination;
