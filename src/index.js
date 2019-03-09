import './style/style.css';
import { api } from './js/api';
import { dnd } from './js/dnd';
import { fnAddRemove } from './js/add';
import { save } from './js/save';
import { filter } from './js/filter';

window.onload = function () {
    document.querySelector('.input-left-text').value = '';
    document.querySelector('.input-right-text').value = '';
}

function funLoad() {
    return new Promise((resolve, reject) => {
        if (!localStorage.getItem('left')) {
            resolve();
        } else {
            reject();
        }
    })
}

function loadLocalStorage() {
    const friendListLeft = document.querySelector('.list-friends-left'),
        friendListRight = document.querySelector('.list-friends-right');

    friendListLeft.innerHTML = localStorage.getItem('left');
    friendListRight.innerHTML = localStorage.getItem('right');

    for (const friendLeft of Array.from(friendListLeft.children)) {
        friendLeft.style.display = 'list-item';
    }

    for (const friendRith of Array.from(friendListRight.children)) {
        friendRith.style.display = 'list-item';
    }
}

funLoad()
    .then(
        () => {
            api()
        },
        () => {
            loadLocalStorage()
        }
    ).then(() => {
        dnd(), fnAddRemove(), save(), filter()
    })