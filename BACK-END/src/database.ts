import {createPool} from 'mysql2/promise';
const connection = createPool({
    host: 'localhost',
    user: 'root',
    //password: 'root',
    password: '12345678',
    //password:"Reynaxel1708@",
    database: 'db_sbec',
    port: 3306
});
export default connection;