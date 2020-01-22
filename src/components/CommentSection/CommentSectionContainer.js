// You will add code to this file
// import React, { useState } from "react";
// import CommentInput from "./CommentInput";
// import Comment from "./Comment";
// import "./Comment.css";
import React from "react"
import './PostContainer.css'

// const CommentSection = props => {
//   // Add state for the comments
//   console.log(props.comments)
//   return (
//     <div>
//       {props.comments.map((comment)=>{
//               return <p>{comment.username} {comment.text}</p>
//           })}
//           <input placeholder="Add a comment..."/>

//     </div>
//   );
// };

const CommentSection = props =>  {
  //console.log(props)
  return(
      <div className='comment-container'>
          {props.commentsarray.map(({username, text}, index) => (
      <div className="user-comment">
          <a href="index.html">{username}</a>
          <p>{text}</p>
      </div>
          ))}
      </div>
  )
}


export default CommentSection;
 {/* map through the comments data and return the Comment component */}
 <CommentInput />