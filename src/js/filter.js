function filter() {
    const inLeft = document.querySelector('.input-left-text'),
        inRight = document.querySelector('.input-right-text'),
        yourFrList = document.querySelector('.list-friends-left'),
        friendsInList = document.querySelector('.list-friends-right');

    function isMatching(name, input) {
        if (name.toUpperCase().indexOf(input.toUpperCase()) !== -1 || input === '') {
            return true;
        }

        return false;
    }

    inLeft.addEventListener('keyup', () => {
        for (const friend of yourFrList.children) {
            if (!isMatching(friend.querySelector('.friend-name').textContent.trim(), inLeft.value)) {

                friend.style.display = 'none';

            } else {
                friend.style.display = 'list-item';
            }

        }
    })

    inRight.addEventListener('keyup', () => {
        for (const friend of friendsInList.children) {
            if (!isMatching(friend.querySelector('.friend-name').textContent.trim(), inRight.value)) {

                friend.style.display = 'none';

            } else {
                friend.style.display = 'list-item';
            }

        }
    })
}

export {
    filter
}