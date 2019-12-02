const mysql = require('mysql2');
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'sql9.freemysqlhosting.net', // TODO: move to .env
    user: process.env.DB_USER || 'sql9313622',
    password: process.env.DB_PASSWORD || '6RBmF3tYPr',
    database:  process.env.DB_DATABASE || 'sql9313622'
});
const promisedPool = pool.promise();


class Db {
    constructor(){
        this.pool = promisedPool;
    }

    // TODO: move to ORM
    async query(table){

        let queryResult;
        try{
                let sql = `SELECT * FROM ${table}`;
                [queryResult] = await this.pool.query(sql);
                return queryResult;
        }
        catch(err){
            console.log('Query Error occurred', err);
            throw err;
        }
    }

}
module.exports = new Db();







