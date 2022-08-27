let container = document.createElement('div');
document.body.appendChild(container);

let key = 'user'

let user = JSON.parse(localStorage.getItem(key));
console.log(user);


let createUser = (obj) => {
    for (const objKey in obj) {
        if(typeof obj[objKey] !== 'object') {
            let htmlDivElement = document.createElement('div');
            htmlDivElement.innerText = `${objKey} -- ${obj[objKey]}`
            container.appendChild(htmlDivElement)

        }else {createUser(obj[objKey])}
    }
}
createUser(user)




// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.





let divPosts = document.createElement('div');
document.body.appendChild(divPosts);

let buttonPost = document.createElement('button');
buttonPost.innerText = 'post of current user';
divPosts.appendChild(buttonPost);

buttonPost.onclick = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post in posts) {
                let postDiv = document.createElement('div');
                postDiv.innerText = `${post.id} - ${post.title}`;
                divPosts.appendChild(postDiv)



            }
        })
}