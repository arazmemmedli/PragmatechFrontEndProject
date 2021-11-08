import React from 'react';
import shortid from "shortid";
import { useEffect, useState, useCallback, useRef } from 'react';
import Pagination from './Pagination';

function Main() {
    const [value, setValue] = useState();
    const [termsData, setTermsData] = useState(null);
    const [pagCount, setPagCount] = useState(null);
    const [page, setPage] = useState(1);
    const searchRef = useRef(null);

    const getValue = (e) => {
        e.preventDefault();
        const searchValue = searchRef.current.value;
        setValue(searchValue)

    }

    useEffect(() => {
        fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${value}&format=json&page=${page}`)
            .then((res) => {
                return res.json();
            }).then((data) => {
                setTermsData(data);
                setPagCount(data.totalItems / (data.endIndex - data.startIndex + 1));
            }).catch(() => {
                console.log("Data Yoxdur!")
            })
    }, [value, pagCount, page])

    const paginate = useCallback((pageNumber) => {
        setPage(pageNumber);
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <div className="wrapper">
                        <div className="wrapper__content">
                            <form action="" className="wrapper__form d-flex mt-3 mx-3" onSubmit={getValue}>
                                <div className="form-group mb-4">
                                    <input ref={searchRef} type="search" name="search" id="search" className="form-control" placeholder="Search.." />
                                </div>
                                <div className="form-group mx-3">
                                    <input type="submit" value="Submit" className="btn btn-success" />
                                </div>
                            </form>
                        </div>
                        <Pagination pagCount={pagCount} paginate={paginate} />
                    </div>
                </div>
            </div>
            <div className="data__show d-flex justify-content-between">
                <div className="data__show__title">
                    <h3>Title</h3>
                    {
                        termsData?.items.map((item) => {
                            return <p key={shortid.generate()}>{item.title}</p>
                        })
                    }
                </div>
                <div className="data__show__year">
                    <h3>Start Year</h3>
                    {
                        termsData?.items.map((item) => {
                            return <p key={shortid.generate()}>{item.start_year}</p>
                        })
                    }
                </div>
                <div className="data__show__publisher">
                    <h3>Publisher</h3>
                    {
                        termsData?.items.map((item) => {
                            return <p key={shortid.generate()}>{item.publisher}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Main;