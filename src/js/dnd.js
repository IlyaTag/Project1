function dnd() {
    const yourFrList = document.querySelector('.list-friends-left');
    const friendsInRight = document.querySelector('#friends-container-right');
    const friendsInLeft = document.querySelector('#friends-container-left');
    const friendsInList = document.querySelector('.list-friends-right');
    // - for filter 1  start
    const inLeft = document.querySelector('.input-left-text'),
        inRight = document.querySelector('.input-right-text');

    function isMatching(name, input) {
        if (name.toUpperCase().indexOf(input.toUpperCase()) !== -1 || input === '') {
            return true;
        }

        return false;
    }
    // - for filter 1 end

    yourFrList.addEventListener('dragstart', e => {
        // eslint-disable-next-line no-console
        const id = 'id' + Math.round(Math.random() * 100);

        e.target.id = id;
        e.dataTransfer.setData('key', e.path[0].innerHTML);
        e.dataTransfer.setData('id', id);
    })
    friendsInRight.addEventListener('dragover', e => {
        e.preventDefault();
    })
    friendsInRight.addEventListener('drop', e => {
        // eslint-disable-next-line no-console
        const elem = document.createElement('li');
        const dragElement = document.getElementById(e.dataTransfer.getData('id'));

        elem.className = 'friends-items';
        elem.innerHTML = e.dataTransfer.getData('key');
        const i = elem.querySelector('i');
        
        i.className = 'fa fa-times';
        elem.draggable = 'true';
        friendsInList.appendChild(elem);
        yourFrList.removeChild(dragElement);
        // - for filter 2 start
        if (!isMatching(elem.querySelector('.friend-name').textContent.trim(), inRight.value)) {

            elem.style.display = 'none';

        } else {
            elem.style.display = 'list-item';
        }
        // - for filter 2 end
    })
    // dnd - ringht - left 1 start

    friendsInList.addEventListener('dragstart', e => {
        // eslint-disable-next-line no-console
        const id = 'id' + Math.round(Math.random() * 300);

        e.target.id = id;
        e.dataTransfer.setData('key', e.path[0].innerHTML);
        e.dataTransfer.setData('id', id);
    })

    friendsInLeft.addEventListener('dragover', e => {
        e.preventDefault();
    })

    friendsInLeft.addEventListener('drop', e => {
        // eslint-disable-next-line no-console
        const elem = document.createElement('li');
        const dragElement = document.getElementById(e.dataTransfer.getData('id'));

        elem.className = 'friends-items';
        elem.draggable = 'true';
        elem.innerHTML = e.dataTransfer.getData('key');
        const i = elem.querySelector('i');
        
        i.className = 'fa fa-plus';
        yourFrList.appendChild(elem);
        friendsInList.removeChild(dragElement);
        // - for filter 3 start
        if (!isMatching(elem.querySelector('.friend-name').textContent.trim(), inLeft.value)) {

            elem.style.display = 'none';

        } else {
            elem.style.display = 'list-item';
        }
        // - for filter 3 start
    })
    // dnd - ringht - left 1 start
}

export {
    dnd
}