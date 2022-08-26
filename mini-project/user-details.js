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