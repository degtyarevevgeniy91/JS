    // В index.html
    // 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
    // 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
    // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
    // на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

    let mainDiv = document.createElement('div');
    mainDiv.classList.add('users');
    document.body.appendChild(mainDiv)

    let key = 'user';

    let user = JSON.parse(localStorage.getItem(key));
    console.log(user);

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
    for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('name');
    userDiv.innerText = `${user.id} ${user.name}`;

        let button = document.createElement('button');
        button.classList.add('pressBtn');
        button.innerText = 'click';
        userDiv.appendChild(button)

button.onclick = (e) => {
    e.preventDefault();
    localStorage.setItem(key, JSON.stringify(user));
    location.href = `./user-details.html?=${user.id}`
}


        mainDiv.appendChild(userDiv)
}

})










    //     На странице post-details.html:
    // 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
    // 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
    //
    // Стилизація проєкта -
    // index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
    //     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
    //     блоки з короткою іфною про post - в ряд по 5 .
    //     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
    //     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

