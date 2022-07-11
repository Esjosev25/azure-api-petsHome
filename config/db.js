const config = {
    user: "adminuwu", // update me
    password: "Salu2uwu", // updat
    server: "holauwu.database.windows.net",
    database: "Hola",
    options: {
        trustedconnection: false,
        enabledArithAbort: true,
        encryt: false
    }
}

// const config = {
//     authentication: {
//         options: {
//             userName: process.env.DB_USER,
//             password: process.env.DB_PASSWORD
//         },
//         type: 'default'
//     },
//     server: process.env.DB_SERVER,
//     options: {
//         database: process.env.DB_NAME,
//         encrypt: true,
//         rowCollectionOnDone: true,

//     }
// }

// const connectDB = async (execQuery) => {
//     try {
//         const connection = new Connection(config);
//         connection.on('connect', err => {
//             if (!err) {
//                 console.log('Connected to database');
//                 execQuery(err);
//             } else {

//             }
//         })
//         connection.connect();
//     } catch (error) {
//         console.log(error);
//         // Exit process with failure
//         process.exit(1);
//     }


// }

module.exports = config;