function fnAddRemove() {
    const yourFrList = document.querySelector('.list-friends-left');
    const friendsInList = document.querySelector('.list-friends-right');
    const friendsContainer = document.querySelector('#friends-container');

    friendsContainer.addEventListener('click', e => {
        if (e.path[0].classList[0] === 'fa' && e.path[1].className !== 'head-right') {
            const elem = document.createElement('li');

            elem.className = 'friends-items';

            if (e.path[0].classList[1] === 'fa-plus') {
                e.path[0].className = 'fa fa-times';
                elem.innerHTML = e.path[0].parentNode.parentNode.innerHTML;
                friendsInList.appendChild(elem);
                yourFrList.removeChild(e.path[0].parentNode.parentNode);
            } else {
                if (e.path[0].classList[1] === 'fa-times') {
                    elem.draggable = 'true';
                    e.path[0].className = 'fa fa-plus';
                    elem.innerHTML = e.path[0].parentNode.parentNode.innerHTML;
                    yourFrList.appendChild(elem);
                    friendsInList.removeChild(e.path[0].parentNode.parentNode);
                }
            }

        }
    })
}

export {
    fnAddRemove
}