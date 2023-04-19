import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import {useState} from "react"
import {blog} from "../../data/blogs"
function App() {
  const [comments, setComments] = useState([])
  function handleSubmit(author, content){
    // create an object for the comment
    // add it to the array of comments
    const newComment = {
      id: Math.random().toString(30),
      author: author,
      comment: content,
    }
    setComments([...comments, newComment])
    console.log(comments)
  }
  return (<>
  <BlogPost blog = {blog}/>
  <CommentList comments = {comments}/>
  <CommentForm handleSubmit = {handleSubmit}></CommentForm>
  </>)
}

export default App;
