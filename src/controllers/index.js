import query from '../database';
import fs from 'fs-extra';
import path from 'path';

export const getSongs = async (req, res) => {
	const songs = await query('all', 'SELECT * FROM songs ORDER BY id ASC');

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
};

export const getOneSong = async (req, res) => {
	const song = await query('get', 'SELECT * FROM songs WHERE id=?', [
		req.params.id,
	]);

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
};

export const addSong = async (req, res) => {
	const { title, author } = req.body;
	const song = req.file;

	if (!title || !author || !song)
		return res.json({
			error: true,
			message: 'Author(s), title or song missing.',
		});

	await query(
		'run',
		'INSERT INTO songs (title,author,filename,song_url) VALUES (?,?,?,?)',
		[title, author, song.filename, `/api/songs/file/${song.filename}`]
	);

	res.json({
		error: false,
		message: 'Song added',
	});
};

export const deleteSong = async (req, res) => {
	const song = await query('get', 'SELECT * FROM songs WHERE id=?', [
		req.params.id,
	]);

	if (!song) {
		return res.json({
			error: true,
			message: 'No song on database.',
		});
	}

	await fs.unlink(path.join(__dirname, '../../songs', song.filename));

	await query('run', 'DELETE FROM songs WHERE id=?', [req.params.id]);

	res.json({
		error: false,
		message: 'Song deleted',
	});
};

export const updatedSong = async (req, res) => {
	const { id } = req.params;
	const { title, author } = req.body;

	if (!title || !author)
		return res.json({ error: true, message: 'Author(s) or title missing.' });

	await query('run', 'UPDATE songs SET title=?,author=? WHERE id=?', [
		title,
		author,
		id,
	]);

	res.json({
		error: false,
		message: 'Song updated',
	});
};

export const getSongFile = async (req, res) => {
	try {
		const songStream = fs.createReadStream(
			path.join(__dirname, '../../songs', req.params.file)
		);

		const { size } = await fs.stat(
			path.join(__dirname, '../../songs', req.params.file)
		);

		res.header({
			'Content-Type': 'audio/mpeg',
			'Content-Length': size,
		});

		songStream.pipe(res, { end: true });
	} catch (err) {
		console.log(err);

		res.status(500).json({
			error: true,
			message:
				"Something went wrong streaming the data or the file doesn't exists.",
		});
	}
};
