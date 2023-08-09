const addBlogButton = document.getElementById("add-blog");
const modal = document.getElementById("modal");

addBlogButton.addEventListener("click", (event) => {
    modal.style.display = "block";
});

/*
addBlogButton.addEventListener("click", updateDB);

function updateDB() {
    const username = user_input.value;
    const message = message_input.value;

    const value = {
        NAME: username,
        MESSAGE: message
    };
    
    database.push(value);
}

database.on('child_added', addMessageToBoard);

function addMessageToBoard(rowData) {
    const data = rowData.val();
    const name_value = data.NAME;
    const message_value = data.MESSAGE;

    const div_element = document.createElement("div");
    const name_paragraph = document.createElement("p");
    const message_paragraph = document.createElement("p");

    div_element.className = "single-message";
    name_paragraph.className = "single-message-username";

    name_paragraph.textContent = `User: ${name_value}`;
    message_paragraph.textContent = `Message: ${message_value}`;

    div_element.appendChild(name_paragraph);
    div_element.appendChild(message_paragraph);

    blogContainer.appendChild(div_element);
}
*/