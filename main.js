const cacheDom = (selector) => document.querySelector(selector);

const People = (function () {
    let users = [];
    function addPersonName() {
        cacheDom('.add-user').addEventListener('click', () => {
            users.push(cacheDom('.input1').value);
            console.log(users);
            render();
        })
    }

    let p;
    function render() {
        cacheDom('.left').innerHTML = '';
        for (let i = 0; i < users.length; i++) {
        p = document.createElement('p');
        p.style.marginTop = '20px';
        p.innerHTML = 
        `<span>${i+1}</span>.
        <span>${users[i]}</span>
        <button class="delete">delete</button>`
        cacheDom('.left').append(p);
        cacheDom('.input1').value = ''
    }
    }

    function delPersonName () {
    cacheDom('.left').addEventListener('click', () => {
        if (event.target.classList.contains('delete')) {
            console.log(event.target.parentElement.children[0].innerText - 1);
            users.splice(event.target.parentElement.children[0].innerText - 1, 1);
            render()
        }
    })
}

    return {
        addPersonName: addPersonName
    }
}())

function init() {
    People.btnAddUser();
}

init();