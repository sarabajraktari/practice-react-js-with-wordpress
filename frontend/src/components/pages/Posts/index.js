import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_ROOT}/posts`;
        axios.get(url).then((res) => {
            setPosts(res.data);
        });
    }, []);

    return (
        <>
            <h1 className='text-lg font-bold text-center'>Posts</h1>
            <div className="w-4/5 py-10 m-auto flex justify-between align-middle flex-wrap gap-10">
                {
                    Object.keys(posts).length ? posts.map(post => {
                        return (
                            <div key={post.id} className='card p-3 w-[330px] shadow-lg rounded-lg flex gap-5 flex-col'>
                                <Link to={`/posts/${post.id}`}>
                                    <img src='https://placehold.co/400'  alt='example-img'/>
                                    <h2 className='text-lg front-bold'>{post.title.rendered}</h2>
                                    <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                                </Link>
                            </div>
                        )
                    }) : 'Loading...'
                }
            </div>
        </>
    )
}

export default Posts;