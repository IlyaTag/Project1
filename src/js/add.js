function fnAddRemove() {
    const yourFrList = document.querySelector('.list-friends-left');
    const friendsInList = document.querySelector('.list-friends-right');
    const friendsContainer = document.querySelector('#friends-container');
    // - for filter 1 start

    const inLeft = document.querySelector('.input-left-text'),
        inRight = document.querySelector('.input-right-text');

    function isMatching(name, input) {
        if (name.toUpperCase().indexOf(input.toUpperCase()) !== -1 || input === '') {
            return true;
        }

        return false;
    }

    // - for filter 1 end

    friendsContainer.addEventListener('click', e => {
        if (e.path[0].classList[0] === 'fa' && e.path[1].className !== 'head-right') {
            const elem = document.createElement('li');

            elem.className = 'friends-items';

            if (e.path[0].classList[1] === 'fa-plus') {
                elem.draggable = 'true';
                e.path[0].className = 'fa fa-times';
                elem.innerHTML = e.path[0].parentNode.parentNode.innerHTML;
                friendsInList.appendChild(elem);
                yourFrList.removeChild(e.path[0].parentNode.parentNode);
                // - for filter 2 start

                if (!isMatching(elem.querySelector('.friend-name').textContent.trim(), inRight.value)) {

                    elem.style.display = 'none';
        
                } else {
                    elem.style.display = 'list-item';
                }

                // - for filter 2 end
            } else {
                if (e.path[0].classList[1] === 'fa-times') {
                    elem.draggable = 'true';
                    e.path[0].className = 'fa fa-plus';
                    elem.innerHTML = e.path[0].parentNode.parentNode.innerHTML;
                    yourFrList.appendChild(elem);
                    friendsInList.removeChild(e.path[0].parentNode.parentNode);
                    // - for filter 3 start

                    if (!isMatching(elem.querySelector('.friend-name').textContent.trim(), inLeft.value)) {

                        elem.style.display = 'none';
            
                    } else {
                        elem.style.display = 'list-item';
                    }

                    // - for filter 3 end
                }
            }

        }
    })
}

export {
    fnAddRemove
}