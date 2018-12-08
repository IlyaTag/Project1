function save() {
    const btnSave = document.querySelector('#btnSave'),
        friendListLeft = document.querySelector('.list-friends-left'),
        friendListRight = document.querySelector('.list-friends-right');

    btnSave.addEventListener('click', () => {
        localStorage.setItem('left', friendListLeft.innerHTML);
        localStorage.setItem('right', friendListRight.innerHTML);
    })
}

export {
    save
}