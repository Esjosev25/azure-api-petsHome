class Singleton {
    static config = new Singleton();
    constructor() {
    }
    static getInstance() {
        if (!this.config) {

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
        return this.config;
    }
}


module.exports = Singleton;