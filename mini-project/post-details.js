

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
commentsDiv.append(mainDiv3, divComents)


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




let buttonCom = document.createElement('button');
buttonCom.innerText = 'comments';
mainDiv3.appendChild(buttonCom)




buttonCom.onclick = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
        .then(response => response.json())
.then(comments => {
    function createComments (comments) {
        for (const comment in comments) {
            if(typeof comments[comment] !== 'object') {
                let divElementCom = document.createElement('div');
                divElementCom.classList.add('com')
                divElementCom.innerHTML = `<h4>${comment} -- ${comments[comment]}</h4>`
                divComents.appendChild(divElementCom)

            }else {createPost(comments[comment])
            }
        }

    }
    createComments(comments)
}
)}


