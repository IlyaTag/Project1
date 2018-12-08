import './style/style.css';
import { api } from './js/api';
import { dnd } from './js/dnd';
import { fnAddRemove } from './js/add';
import { save } from './js/save';
import { filter } from './js/filter';

if (!localStorage.getItem('left')) {
    api();
} else {
    const friendListLeft = document.querySelector('.list-friends-left'),
        friendListRight = document.querySelector('.list-friends-right');

    friendListLeft.innerHTML = localStorage.getItem('left');
    friendListRight.innerHTML = localStorage.getItem('right');

    for (const friendLeft of friendListLeft.children) {
        friendLeft.style.display = 'list-item';
    }

    for (const friendRith of friendListRight.children) {
        friendRith.style.display = 'list-item';
    }

}

setTimeout(() => {
    dnd();
    fnAddRemove();
    save();
    filter();
}, 400)