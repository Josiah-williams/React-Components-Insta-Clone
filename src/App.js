import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBarContainer"
import PostContainer from './components/PostsContainer/PostHeader';
import data from './dummy-data'
// console.log(dummyData)


function App() {
  const [post] = useState(data);
  return (
    <div className = "App">
    <SearchBar />
    {post.map((userPost, index)=>{
        return <PostContainer key={index} post={userPost}/>
      })
      }
   </div>
  );
    }
export default App;