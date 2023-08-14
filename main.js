const database = firebase.database().ref();

const addBlogButton = document.getElementById("add-blog");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");
const growContainer = document.getElementsByClassName("grow-wrap")[0];
const textInput = document.getElementsByTagName("textarea")[0];
const form = document.getElementById("blog-form");
const all_message = document.getElementById("all-messages");

textInput.addEventListener("input", () => {
    growContainer.dataset.replicatedValue = textInput.value;
});

addBlogButton.addEventListener("click", (event) => {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const content = document.querySelector("textarea[name='content']").value;
  
    const value = {
      TITLE: title,
      AUTHOR: author,
      CONTENT: content
    };
    
    // Push the value to the Firebase database
    database.push(value);
  
    // Clear input fields and close the modal
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.querySelector("textarea[name='content']").value = "";
    modal.classList.add("closed");
    modalOverlay.classList.add("closed");
  });
  
  // Listen for new child messages added to the database
  database.on("child_added", (snapshot) => {
    const data = snapshot.val();
    const title = data.TITLE;
    const author = data.AUTHOR;
    const content = data.CONTENT;
  
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
  
    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = "Title: " + title;
  
    const authorParagraph = document.createElement("p");
    authorParagraph.textContent = "Author: " + author;
  
    const contentParagraph = document.createElement("p");
    contentParagraph.textContent = "Content: " + content;
  
    messageDiv.appendChild(titleParagraph);
    messageDiv.appendChild(authorParagraph);
    messageDiv.appendChild(contentParagraph);
  
    all_message.appendChild(messageDiv);

    messageDiv.style.marginBottom = "50px";
  });