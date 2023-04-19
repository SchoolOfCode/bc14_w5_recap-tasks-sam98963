// Take in props of author and content to display the comment
// write a function to take in author and return capitalised initials


// Remove hard coding of author and content when input works!
function firstInitials () {
  let author = "Sam Williamson"
  let words = author.split(" ");
let initials = "";

for (let i = 0; i < words.length; i++) {
  let initial = words[i].charAt(0).toUpperCase();
  initials += initial;
}
return initials;
} 

function Comment() {
  let author = "Sam Williamson"
let content = "Hello There"
    const initials = firstInitials(author);
  return (<div>
    <div>
      <p>{initials}</p>
    </div>
    <h3>{author}</h3>
    <p>{content}</p>
  </div>)
}

export default Comment;
