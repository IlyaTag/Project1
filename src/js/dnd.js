function dnd() {
    const yourFrList = document.querySelector('.list-friends-left');
    const friendsInCont = document.querySelector('#friends-container-right');
    const friendsInList = document.querySelector('.list-friends-right');

    yourFrList.addEventListener('dragstart', e => {
        // eslint-disable-next-line no-console
        console.log(e);
        const id = 'id' + Math.round(Math.random() * 100);

        e.target.id = id;
        e.dataTransfer.setData('key', e.path[0].innerHTML);
        e.dataTransfer.setData('id', id);
    })
    friendsInCont.addEventListener('dragover', e => {
        e.preventDefault();
    })
    friendsInCont.addEventListener('drop', e => {
        // eslint-disable-next-line no-console
        const elem = document.createElement('li');
        const dragElement = document.getElementById(e.dataTransfer.getData('id'));

        elem.className = 'friends-items';
        elem.innerHTML = e.dataTransfer.getData('key');
        const i = elem.querySelector('i');
        
        i.className = 'fa fa-times';
        friendsInList.appendChild(elem);
        yourFrList.removeChild(dragElement);
    })

}

export {
    dnd
}