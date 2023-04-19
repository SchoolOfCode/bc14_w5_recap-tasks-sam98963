// Take in props of (blog), which is an object containing :
/* 
title: string
author: string
datePosted: string
content: string
imageSrc: string
imageAlt: string
*/

function BlogPost({blog}) {
  return (<div>
    <h1>{blog.title}</h1>
    <h3>{blog.author}</h3>
    <p>{blog.datePosted}</p>
    <img src={blog.imageSrc} alt={blog.imageAlt}/>
    <p>{blog.content}</p>
   
  </div>);
}

export default BlogPost;
