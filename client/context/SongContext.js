import React, { useState, createContext, useContext } from 'react';

import { SongsContext } from './SongsContext';

export const SongContext = createContext();

const SongContextProvider = (props) => {
	const { playlist } = useContext(SongsContext);

	const [current, setCurrent] = useState({
		title: null,
		author: null,
		songUrl: null,
		isPlaying: false,
		id: null,
	});

	const changeSong = (nextId) => {
		const nextSong = playlist.songs[nextId];
		setCurrent({
			title: nextSong.title,
			author: nextSong.author,
			songUrl: nextSong.song_url,
			isPlaying: true,
			id: nextId,
		});
	};

	const nextSong = () => {
		let nextId = current.id + 1;

		if (nextId >= playlist.songs.length) {
			nextId = 0;
		}

		changeSong(nextId);
	};

	const prevSong = () => {
		let nextId = current.id - 1;

		if (nextId < 0) {
			nextId = playlist.songs.length - 1;
		}

		changeSong(nextId);
	};

	const randomSong = () => {
		const minIndex = 0;
		const maxIndex = playlist.songs.length;

		const nextId = Math.floor(Math.random() * (maxIndex - minIndex) + minIndex);

		const nextSong = playlist.songs[nextId];

		if (nextSong.song_url === current.songUrl) return randomSong();

		changeSong(nextId);
	};

	return (
		<SongContext.Provider
			value={{ current, setCurrent, nextSong, prevSong, randomSong }}>
			{props.children}
		</SongContext.Provider>
	);
};

export default SongContextProvider;
