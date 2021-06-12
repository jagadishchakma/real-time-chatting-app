/**
 * Title: Database connection
 * Description: Mongodb database connection using mongoose
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */

// external module
const mongoose = require('mongoose');

// connection method
function databaseConnection(){ 
    // connection string
    const dbUser = process.env.DB_USER;
    const dbName = process.env.DB_NAME;
    const dbUserPass = process.env.DB_USER_PASS;
    const URL = `mongodb+srv://${dbUser}:${dbUserPass}@cluster0.pa04j.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    
    // connect
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database Connected'))
    .catch(() => console.log('Database connection failed'))
};

module.exports = databaseConnection;