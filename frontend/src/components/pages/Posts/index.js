import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_ROOT}/posts`;
        axios.get(url).then((res) => {
            setPosts(res.data);
        });
    }, []);
    console.log('posts', posts);

    return (
        <>
            <h1 className='text-lg font-bold'>Posts</h1>
            <div className="w-4/5 py-10 m-auto flex justify-between align-middle flex-wrap gap-10">
                {
                    posts && posts.map(post => {
                        return (
                            <div key={post.id} className='card p-3 w-[330px] shadow-lg rounded-lg flex gap-5 flex-col'>
                                <img src='https://placehold.co/400'  alt='example-img'/>
                                <h2 className='text-lg front-bold'>{post.title.rendered}</h2>
                                <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                                {post.title.rendered}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Posts;