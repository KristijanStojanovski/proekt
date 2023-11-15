let productLikes = {};

function likeFunction(productName, likesId, buttonId) {
    if (!productLikes[productName]) {
        productLikes[productName] = 0;
    }

    productLikes[productName]++;
    updateLikeCounter(productName, likesId);
    updateButtonLabel(productName, buttonId);
}

function updateLikeCounter(productName, likesId) {
    const likeCounter = document.getElementById(likesId);

    if (likeCounter) {
        likeCounter.textContent = `Likes: ${productLikes[productName]}`;
    }
}

let commentId = 1;

function addComment(productName, commentInputId, commentsContainerId) {
    const commentInput = document.getElementById(commentInputId);
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        const commentsContainer = document.getElementById(commentsContainerId);
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentsContainer.appendChild(newComment);
        commentInput.value = '';
    }
}

function displayComments(productName, commentsContainerId) {
    const commentsContainer = document.getElementById(commentsContainerId);
    commentsContainer.innerHTML = '';

    // Display each comment
    productComments[productName].forEach((comment, index) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = `Comment ${index + 1}: ${comment}`;
        commentsContainer.appendChild(commentElement);
    });
}
function updateButtonLabel(productName, buttonId) {
    const likeButton = document.getElementById(buttonId);

    if (likeButton) {
        likeButton.textContent = `${productLikes[productName]} Likes`;
    }
}
function login()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username==="user" && password==="123")
    {
        window.location.href="home.html"
    }
    else
    {
        document.getElementById("form").reset();
        window.alert("Погрешен username/password");
    }
}
