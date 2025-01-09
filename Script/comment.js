const username = localStorage.getItem('usernameOrEmail');
// if (!username) {
//     alert('Please log in first!');
//     window.location.href = 'login.html'; 
// }


document.getElementById('addComment').addEventListener('click', function () {
    const commentText = document.getElementById('commentText').value;

    if (commentText.trim()) {
        const comment = {
            username: username,
            text: commentText,
            timestamp: new Date().toLocaleString()
        };

        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));

        displayComments(); 
        document.getElementById('commentText').value = ''; 
    } else {
        alert('Please write a comment before submitting.');
    }
});

function displayComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = ''; 

    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    for (let index = 0; index < comments.length; index++) {
        const comment = comments[index];
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        commentDiv.innerHTML = `
        <section class="button-up-page comments" >
            <div class="username">
                <i class="fa-solid fa-user-large"></i>
                Submitted by
                ${comment.username} on <span class="timestamp">${comment.timestamp}</span>
            </div>
            <ul>
            <li></li>
            <li>
            <div class="text">${comment.text}</div>
            </li>
            </ul>
        </section>
        `;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i> Delete`
        // deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.style.color = 'orangered';
        deleteButton.style.cursor = 'pointer';
        deleteButton.style.width = '90px';
        deleteButton.style.height = '40px';
        deleteButton.style.fontSize = '17px';
        deleteButton.style.border = 'none';
        deleteButton.style.border = '1px solid orangered';
        deleteButton.style.borderRadius = '6px';
        
        deleteButton.addEventListener('mouseover', function () {
            deleteButton.style.backgroundColor = 'orangered'; 
            deleteButton.style.color = 'white'; 
        });
        
        deleteButton.addEventListener('mouseout', function () {
            deleteButton.style.backgroundColor = 'transparent'; 
            deleteButton.style.color = 'orangered'; 
        });


        deleteButton.addEventListener('click', function () {
            deleteComment(index);
        });

        commentDiv.appendChild(deleteButton);
        commentsList.appendChild(commentDiv);
    }
}


function deleteComment(index) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.splice(index, 1); 
    localStorage.setItem('comments', JSON.stringify(comments)); 
    displayComments(); 
}

window.onload = displayComments;


function rate(value) {
    var stars = document.querySelectorAll('.star');
    for (let i = 0; i < stars.length; i++) {
      if (i < value) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
    }
    document.getElementById('rating-value').textContent =` Your Rating: ${value}/5`;
  }