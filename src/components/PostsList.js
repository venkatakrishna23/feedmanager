import React from 'react';
import PostsWidget from './PostsWidget';
import '../StylesSheet/PostsWidget.css'
function PostsList(props) {
    return (
        <div className='posts-List'>
            {props && props.postsList.map((post, index) => {

                return <>
                    {post && (props.filterFeed === '' || post.tagsList.includes(props.filterFeed)) ?

                        <PostsWidget
                            key={index}
                            index={index}
                            post={post}
                            handleDeletePost={props.handleDeletePost}
                        /> : null
                    }
                </>
            })}
        </div>
    )
}

export default PostsList
