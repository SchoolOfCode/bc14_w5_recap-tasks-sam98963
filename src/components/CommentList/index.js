import Comment from "../Comment"

// Take in comments as an array of objects from comment Form.
// import Comment from ../Comment
/*
{
  id : string
  author: string
  content: string
}

*/

function CommentList(comments) {
  return(
    <div>
      <Comment id= {comments.id} author = {comments.author} content = {comments.content}/>
    </div>

  );
}

export default CommentList;
