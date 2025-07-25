import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {
    const { id } = useParams();
    const [post, setPost ] = useState({});
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
        axios.get(url).then(res => {
            setPost(res.data);
        }).catch(err => {
            console.log("error: ", err);
        });
    }, [id]);
    return (
        <>
            {
                Object.keys(post).length ? (
                 <div className="p-5">
                    <div dangerouslySetInnerHTML={{ __html: post.featured_src }} />
                    <div>
                        <h1 className="text-2xl font-bold">
                            {post.title.rendered}
                        </h1>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
                 </div>   
                ) : ('Loading...')
            }
        </>
    )
}

export default Single;