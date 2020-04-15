import { open, Database } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';

sqlite3.verbose();

async function connectDB() {
	const db = await open(path.join(__dirname, '../database.sql'), {
		driver: sqlite3.Database,
	});

	return db;
}

export default connectDB;
