function sendButtonClicked() {
    // Get the blog content element
    var blogContentElement = document.getElementById("blogContent");

    // Get the blog textarea value
    var blogTextareaValue = document.getElementById("blogTextarea").value;

    if (blogTextareaValue.trim() !== "") {
        // Create a new paragraph element
        var newParagraph = document.createElement("p");
        newParagraph.textContent = blogTextareaValue;

        // Append the new paragraph to the blog content
        blogContentElement.appendChild(newParagraph);

        // Clear the textarea after sending
        document.getElementById("blogTextarea").value = "";

        // Show the "done" alert
        alert("Done");
    } else {
        alert("Please enter blog content before sending.");
    }
}