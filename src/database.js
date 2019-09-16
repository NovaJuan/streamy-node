import {Pool} from 'pg';

function connectDB(){
    if(process.env.DATABASE_URL){
        console.log('ok');
        const pool = new Pool({
            connectionString:process.env.DATABASE_URL
        });
        return pool;    
    }else{
        const pool = new Pool({
            host:process.env.PG_HOST,
            user:process.env.PG_USER,
            password:process.env.PG_PASSWORD,
            port:process.env.PG_PORT,
            database:process.env.PG_DATABASE
        });
        return pool;
    }
}

export default connectDB;