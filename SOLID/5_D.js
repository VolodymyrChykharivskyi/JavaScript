// Dependency inversion principle

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json());
        return Promise.resolve('Data from fetch');
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'Data from LocalStorage';

        return dataFromLocalStorage;
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet() {
        return this.fetch.request('tenant.com');
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet() {
        return this.localStorage.get('Key');
    }
}

class DataBase {
    constructor(client) {
        // this.fetch = new Fetch();
        // this.localStorage = new LocalStorage();

        this.client = client;
    }

    getData(key) {
        // return this.fetch.request('tenant.com');
        // return this.localStorage.get('Key');

        return this.client.clientGet(key);
    }
}

// const db = new DataBase(new FetchClient());
const db = new DataBase(new LocalStorageClient());

console.log(db.getData('rand'));