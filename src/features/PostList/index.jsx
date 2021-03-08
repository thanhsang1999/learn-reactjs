import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import PostList from './components/PostListItem';
import queryString from 'query-string';
import PostFiltersFrom from './components/PostFiltersFrom';



function FeaturesPostList() {
    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1,
    });
    useEffect(() => {
        //lay du lieu post list
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filter);
                const requestURl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestURl);
                const responseJSON = await response.json();
                // console.log(responseJSON);

                const { data, pagination } = responseJSON;
                setDataPostList(data);
                setPagination(pagination)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchPostList();
    }, [filter]);

    //khai bao use state
    const [dataPostList, setDataPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });

    //khai bao function
    function handleOnPageChange(newPage) {
        // gọi api dữ liệu mới
        setFilter({
            ...filter,
            _page: newPage,
        })
    }
    function handleRequestSearch(valuesFrom) {
        setFilter({
            ...filter,
            _page: 1,
            title_like: valuesFrom.searchTerm,
        });
    }

    return (
        <div>
            <h2 style={{ color: 'deeppink', }}>React Hook - Post List</h2>
            <PostFiltersFrom onSubmit={handleRequestSearch} />
            <PostList dataPostList={dataPostList} />
            <Pagination pagination={pagination} onPageChange={handleOnPageChange} />
        </div>
    );
}

export default FeaturesPostList;