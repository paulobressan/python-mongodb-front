export default class LoginService {
    constructor(resource) {
        this._resource = resource(`http://localhost:5000/users`, {}, {
            authenticate: {
                method: "POST",
                url: `http://localhost:5000/users/authenticate`
            }
        });
    }

    authenticate(login) {
        return new Promise((resolve, reject) => {
            this._resource
                .authenticate(JSON.stringify(login))
                .then(res => {
                    resolve(res.body)
                })
                .catch(reject)
        });
    }

    create(user) {
        return new Promise((resolve, reject) => {
            this._resource
                .save(JSON.stringify(user))
                .then(res => {
                    resolve(res.body)
                })
                .catch(reject)
        });
    }
}