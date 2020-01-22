// You will add code in this file

import React from "react";
// import CommentSection from "../CommentSection/CommentSectionContainer";
// import LikeSection from "./LikeSection";
// import PostHeader from "./PostHeader";
import "./Posts.css";

const Post = props => {
  // set up state for the likes
return (
  <div className="post__container">
            <div className="user__deets">
                <img className="profile__pix" src={props.post.thumbnailUrl} alt="user-profile" />
                <p>{props.post.username}</p>
            </div>
            <div className="user__post">
                <img className="post__image" src={props.post.imageUrl} alt="user-post"/>
            </div>
        </div>
    )
}

export default Post; 