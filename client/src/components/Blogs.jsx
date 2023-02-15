import React,{useState} from "react";
import ListItem from "./ListItem.jsx";

const Blog = (props) => {  
  return(
  <div>
    <h4> Blogs</h4>
    There are {props.items.length} blogs.

    {props.items.filter((item)=>{item.title.toLowerCase().includes(props.search)}).map((item, index) => (
      <div key={index}>
        <BlogItem item={item} />
      </div>
    ))}
  </div>
)};

export default Blog;