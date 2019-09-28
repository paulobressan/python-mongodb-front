export default class ProductService {
    constructor(resource) {
        this._resource = resource(`http://localhost:5000/products`, {}, {
            findById: {
                method: "GET",
                url: "http://localhost:5000/products/{id}"
            }
        });
    }

    find() {
        return new Promise((resolve, reject) => {
            this._resource
                .get()
                .then(res => {
                    resolve(res.body)
                })
                .catch(reject)
        });
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            this._resource
                .findById({id})
                .then(res => {
                    resolve(res.body)
                })
                .catch(reject)
        });
    }

    create(product) {
        return new Promise((resolve, reject) => {
            this._resource
                .save(JSON.stringify(product))
                .then(res => {
                    resolve(res.body)
                })
                .catch(reject)
        });
    }
}