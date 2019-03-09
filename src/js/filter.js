function filter() {
    var inLeft = document.querySelector('.input-left-text'),
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
        // eslint-disable-next-line guard-for-in
        for (const friend of Array.from(yourFrList.children)) {

            if (!isMatching(friend.querySelector('.friend-name').textContent.trim(), inLeft.value)) {

                friend.style.display = 'none';

            } else {
                friend.style.display = 'list-item';
            }

        }
    })

    inRight.addEventListener('keyup', () => {
        for (const friend of Array.from(friendsInList.children)) {
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