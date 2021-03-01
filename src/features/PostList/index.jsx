import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import PostList from './components/PostListItem';



function FeaturesPostList() {

    useEffect(() => {
        //lay du lieu post list
        async function fetchPostList() {
            try {
                const requestURl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
                const response = await fetch(requestURl);
                const responseJSON = await response.json();
                console.log(responseJSON);

                const { data } = responseJSON;
                setDataPostList(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchPostList();
    }, []);

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
    }

    return (
        <div>
            <h2 style={{ color: 'deeppink', }}>React Hook - Post List</h2>
            <PostList dataPostList={dataPostList} />
            <Pagination pagination={pagination} onPageChange={handleOnPageChange} />
        </div>
    );
}

export default FeaturesPostList;