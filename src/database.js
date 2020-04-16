import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';

if (process.env.NODE_ENV !== 'production') {
	sqlite3.verbose();
}

const connectDB = async () =>
	await open(path.join(__dirname, '../database.sql'), {
		driver: sqlite3.Database,
	});

const query = async (q, sql, params = []) => {
	try {
		const db = await connectDB();

		let result = null;

		switch (q) {
			case 'get':
				result = await db.get(sql, ...params);
				break;

			case 'all':
				result = await db.all(sql, ...params);
				break;

			case 'run':
				await db.run(sql, ...params);
				break;

			default:
				await db.close();
				return result;
		}

		await db.close();
		return result;
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

export default query;
