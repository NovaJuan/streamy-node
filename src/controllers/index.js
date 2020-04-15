import connectDB from '../database';
import fs from 'fs-extra';
import path from 'path';

export async function getSongs(req, res) {
	try {
		const db = await connectDB();
		const SQL = 'SELECT * FROM songs ORDER BY id ASC';
		const songs = await db.all(SQL);

		await db.close();
		if (songs.length < 1) {
			return res.json({
				error: true,
				message: 'No songs on database.',
				noSongs: true,
			});
		}
		res.json({
			error: false,
			songs,
			noSongs: false,
		});
	} catch (err) {
		console.log(err);
		return res.json({
			error: true,
			message: 'Something went wrong',
			noSongs: false,
		});
	}
}

export async function getOneSong(req, res) {
	const { id } = req.params;
	try {
		const db = await connectDB();
		const SQL = 'SELECT * FROM songs WHERE id=?';
		const song = await db.get(SQL, id);
		await db.close();
		if (!song) {
			return res.json({
				error: true,
				message: 'No song on database.',
				noSong: true,
			});
		}
		res.json({
			error: false,
			song,
			noSong: false,
		});
	} catch (err) {
		console.log(err);
		return res.json({
			error: true,
			message: 'Something went wrong',
			noSong: false,
		});
	}
}

export async function addSong(req, res) {
	const { title, author } = req.body;
	const song = req.file;
	if (!title || !author || !song)
		return res.json({
			error: true,
			message: 'Author(s), title or song missing.',
		});

	try {
		const db = await connectDB();
		const SQL =
			'INSERT INTO songs (title,author,filename,song_url) VALUES (?,?,?,?)';
		await db.run(
			SQL,
			title,
			author,
			song.filename,
			`/api/songs/file/${song.filename}`
		);
		await db.close();
		res.json({
			error: false,
			message: 'Song added',
		});
	} catch (err) {
		console.log(err);
		return res.json({
			error: true,
			message: 'Something went wrong',
		});
	}
}

export async function deleteSong(req, res) {
	const { id } = req.params;
	try {
		const db = await connectDB();
		const SQL1 = 'SELECT * FROM songs WHERE id=$1';
		const song = await db.get(SQL1, id);
		if (!song) {
			return res.json({
				error: true,
				message: 'No song on database.',
			});
		}
		await fs.unlink(path.join(__dirname, '../../songs', song.filename));
		const SQL2 = 'DELETE FROM songs WHERE id=$1';
		await db.run(SQL2, id);
		await db.close();
		res.json({
			error: false,
			message: 'Song deleted',
		});
	} catch (err) {
		console.log(err);
		return res.json({
			error: true,
			message: 'Something went wrong',
		});
	}
}

export async function updatedSong(req, res) {
	const { id } = req.params;
	const { title, author } = req.body;
	if (!title || !author)
		return res.json({ error: true, message: 'Author(s) or title missing.' });
	try {
		const db = await connectDB();
		const SQL = 'UPDATE songs SET title=?,author=? WHERE id=?';
		await db.query(SQL, title, author, id);
		await db.close();
		res.json({
			error: false,
			message: 'Song updated',
		});
	} catch (err) {
		console.log(err);
		return res.json({
			error: true,
			message: 'Something went wrong',
		});
	}
}

export async function getSongFile(req, res) {
	const { file } = req.params;
	try {
		const songStream = fs.createReadStream(
			path.join(__dirname, '../../songs', file)
		);
		const { size } = await fs.stat(path.join(__dirname, '../../songs', file));
		res.header({
			'Content-Type': 'audio/mpeg',
			'Content-Length': size,
		});
		songStream.pipe(res, { end: true });
	} catch (err) {
		console.log(err);
		res.status(404).json({
			error: true,
			message:
				"Something went wrong streaming the data or the file doesn't exists.",
		});
	}
}
