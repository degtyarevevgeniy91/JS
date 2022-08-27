let container = document.createElement('div');
document.body.appendChild(container);

let key = 'user'

let user = JSON.parse(localStorage.getItem(key));
console.log(user);

let createPost = (obj) => {
    for (const objKey in obj) {
        if(typeof obj[objKey] !== 'object') {
            let htmlDivElement = document.createElement('div');
            htmlDivElement.innerText = `${objKey} -- ${obj[objKey]}`
            container.appendChild(htmlDivElement)

        }else {createPost(obj[objKey])}
    }
}
createPost(user)



// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)





let divComents = document.createElement('div');
document.body.appendChild(divComents);

let buttonComent = document.createElement('button');
buttonComent.innerText = 'comments';
divComents.appendChild(buttonComent);




buttonComent.onclick = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
        .then(response => response.json())
.then(comments => {
    function createComments (comments) {
        for (const comment in comments) {
            if(typeof comments[comment] !== 'object') {
                let htmlDivElement = document.createElement('div');
                htmlDivElement.innerText = `${comment} -- ${comments[comment]}`
                container.appendChild(htmlDivElement)

            }else {createPost(comments[comment])
            }
        }

    }
    createComments(comments)
}
)}