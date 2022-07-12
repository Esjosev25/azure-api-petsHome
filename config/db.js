class Singleton {
    static instance;
    static config = null;
    constructor() {
        this.config = {
            authentication: {
                options: {
                    userName: process.env.DB_USER,
                    password: process.env.DB_PASSWORD
                },
                type: 'default'
            },
            server: process.env.DB_SERVER,
            database: process.env.DB_NAME,
            options: {
                encrypt: true,
                rowCollectionOnDone: true,
                trustedconnection: false,
                enabledArithAbort: true,

            }
        };
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}


module.exports = Singleton;