
let key = 'user'

let user = JSON.parse(localStorage.getItem(key));
console.log(user);


let mainDiv2 = document.createElement('div');
mainDiv2.classList.add('main')
document.body.appendChild(mainDiv2)

let mainDiv1 = document.createElement('div');
mainDiv1.classList.add('block')






let createUser = (obj) => {
    for (const objKey in obj) {
        if(typeof obj[objKey] !== 'object') {
            let card = document.createElement('div');
            card.classList.add('info')
            card.innerHTML = `<h4>${objKey}: ${obj[objKey]}</h4>`
            mainDiv1.appendChild(card)

        }else {
            createUser(obj[objKey])
        }
    }
}
createUser(user)


let buttonPost = document.createElement('button');
buttonPost.innerText = 'post of current user';
mainDiv1.appendChild(buttonPost);




let divPosts = document.createElement('div');
divPosts.classList.add('posts')
mainDiv2.append(mainDiv1,divPosts)




buttonPost.onclick = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                let postDiv = document.createElement('div');
                postDiv.classList.add('post')
                postDiv.innerHTML = `<h4>${post.id}.  ${post.title}</h4>`;
                divPosts.appendChild(postDiv)

                let buttonPost = document.createElement('button');
                buttonPost.classList.add('button')
                buttonPost.innerText = 'more info';
                postDiv.appendChild(buttonPost);

                buttonPost.onclick = (e) => {
                    e.preventDefault();
                    localStorage.setItem(key, JSON.stringify(post))
                    location.href = `post-details.html?=${post.id}`
                }



            }
        })
}