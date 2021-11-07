import React from 'react';
import axios from "axios";
import { useRef } from 'react';
import SDK from '../SDK';
import "..//Css/CreateList.css";

function CreateList() {
    const nameRef = useRef(null);
    const descRef = useRef(null);
    const sdk=useRef(new SDK());

    const createList = async (e) => {
        e.preventDefault();

        const data = {
            name: nameRef.current.value,
            description: descRef.current.value,
            iso_639_1: "en"
        }

        await sdk.current.CreateList(data);

    }

    return (
        <div className="create__list__wrapper">
            <div className="create__list__form">
                <form action="" onSubmit={createList}>
                    <div className="create__list__form__group">
                        <label className="create__list__title" htmlFor="Name">Name</label>
                        <input ref={nameRef} type="text" name="name" id="name" className="create__list__form__control" style={{ height: "6px" }} />
                    </div>
                    <div className="create__list__form__group">
                        <label className="create__list__title" htmlFor="Description">Description</label>
                        <textarea ref={descRef} type="text" name="description" id="description" className="create__list__form__control" />
                    </div>
                    <div className="create__list__form__group">
                        <label className="create__list__title" htmlFor="General List">General List?</label>
                        <select className="general__list" name="general__list" id="general__list">
                            <option value="1" selected="selected">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <div className="create__list__form__group">
                        <label className="create__list__title" htmlFor="Sort By">Sort By</label>
                        <select className="sort__by" name="sort__by" id="sort__by">
                            <option value="original_order.asc" selected="selected">Orijinal Artan</option>
                            <option value="original_order.desc">Orijinal Azalan</option>
                            <option value="vote_average.asc">Artan Oylar</option>
                            <option value="vote_average.desc">Artan Oylar</option>
                            <option value="primary_release_date.asc">Artan Yayınlanma Tarihi</option>
                            <option value="primary_release_date.desc">Azalan Yayınlanma Tarihi</option>
                            <option value="title.asc">Başlık (A-Z)</option>
                            <option value="title.desc">Başlık (Z-A)</option>
                        </select>
                    </div>
                    <button type="submit" className="create__list__btn">Create List</button>
                </form>
            </div>
        </div>
    )
}

export default CreateList;