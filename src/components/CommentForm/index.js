// Declare two states, one for author and one for comment - have them update to recieve what the user has typed.✅
// Import UseState from react✅
// Handle functions for each useState✅
// Make a default name for Author "Anon Author"
// Do not allow submit if comment is empty.
import {useState} from "react"




function CommentForm({handleSubmit}) {
  const [author,setAuthor] = useState("Anon Author")
  const [comment,setContent] = useState("")
  
  function handleAuthor(e) {
    setAuthor(e.target.value)
  }

  function handleContent(e) {
    setContent(e.target.value)
  }

  // On click call another function (to be written) => check if content is empty if it isn't, call submit function, and reset content.

  function checkHandleSubmit (author, comment) {
    if(comment !== ""){
      handleSubmit(author, comment)
    }
    setContent("")
  }

  return (<div>
      <label>Author:<input type="text" onChange={(e)=>handleAuthor(e)}></input></label>
      <label>Comment:<input lable="Comment:" type="text"  onChange={(e)=>handleContent(e)}></input></label>
      <button type="submit" onClick={()=>checkHandleSubmit(author, comment)}></button>
    
  </div>);
}

export default CommentForm;
