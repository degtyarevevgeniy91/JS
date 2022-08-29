

let key = 'user'

let user = JSON.parse(localStorage.getItem(key));
console.log(user);




let commentsDiv = document.createElement('div');
commentsDiv.classList.add('main-comments');
document.body.appendChild(commentsDiv);

let mainDiv3 = document.createElement('div');
mainDiv3.classList.add('comment');

let divComents = document.createElement('div');
divComents.classList.add('button-comments');
commentsDiv.append(mainDiv3)

let htmlElement = document.createElement('div');
htmlElement.classList.add('container')
document.body.appendChild(htmlElement)
htmlElement.append(commentsDiv, divComents)





let createPost = (obj) => {
    for (const objKey in obj) {
        if(typeof obj[objKey] !== 'object') {
            let DivElement = document.createElement('div');
            DivElement.innerHTML = `<h3>${objKey}: ${obj[objKey]}</h3>`
            mainDiv3.appendChild(DivElement)

        }else {createPost(obj[objKey])}
    }
}
createPost(user)



let button = document.createElement('button');
button.innerText = 'Comments';
button.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + user.id + '/comments')
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {

                if (user.id === comment.postId) {
                    let divElementCom = document.createElement('div');
                    divElementCom.classList.add('com');
                    divElementCom.innerHTML = `
                                        <h4>ID: ${comment.id}</h4>
                                        <h5>Name: ${comment.name}</h5>
                                        <h5>Email: ${comment.email}</h5>
                                        <p>Body: ${comment.body}</p>
                                        `;
                    divComents.appendChild(divElementCom)
                }
            }
        })
}
mainDiv3.appendChild(button);





