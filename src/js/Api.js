import render from '../templates/friends.hbs';

VK.init({
    apiId: 6763941
});

function api() {
    // eslint-disable-next-line no-undef
    function auth() {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-undef
            VK.Auth.login(data => {
                if (data.session) {
                    resolve(data.session);
                } else {
                    reject(new Error('Не удалось авторизоваться'))
                }
            }, 2);

        })
    }

    function callA(method, params) {
        params.v = '5.92';

        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-undef
            VK.api(method, params, (data) => {
                if (data.error) {
                    reject(data.error)
                } else {
                    resolve(data.response);
                }
            })
        })
    }

    let method = 'friends.get',
        params = { order: 'name', fields: 'city, photo_50' };

    auth()
        .then(() => {
            return callA(method, params);
        })
        .then(friends => {
            const html = render(friends);
            const results = document.querySelector('.list-friends-left');

            results.innerHTML = html;

        })
}

export {
    api
}