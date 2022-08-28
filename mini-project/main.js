    // В index.html
    // 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
    // 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
    // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
    // на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

    let mainDiv = document.createElement('div');
    mainDiv.classList.add('users');
    document.body.appendChild(mainDiv)

    let key = 'user';



    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
    for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('user');

    userDiv.innerHTML = `<h3>ID - ${user.id} Name - ${user.name}</h3>`;

        let button = document.createElement('button');
        button.classList.add('info')
        mainDiv.appendChild(userDiv)
        button.innerText = 'User Information';
        userDiv.appendChild(button)

button.onclick = (e) => {
    e.preventDefault();
    localStorage.setItem(key, JSON.stringify(user));
    location.href = `./user-details.html?=${user.id}`
}
}

})
