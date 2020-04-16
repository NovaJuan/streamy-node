import React, { useEffect, useState, useContext } from 'react';
import { SongContext } from '../context/SongContext';
import axios from 'axios';

export default function Song(props) {
	const [song, setSong] = useState({
		title: '',
		author: '',
		songUrl: '',
		id: '',
		api_id: '',
	});
	const { current, setCurrent } = useContext(SongContext);

	function settingSong() {
		const { settedSong, index } = props;
		setSong({
			title: settedSong.title,
			author: settedSong.author,
			songUrl: settedSong.song_url,
			id: index,
			api_id: settedSong.id,
		});
	}

	useEffect(() => {
		settingSong();
	}, [current]);

	const playSong = (e) => {
		if (e.stopPropagation) e.stopPropagation();
		if (song.songUrl !== current.songUrl) {
			setCurrent({
				title: song.title,
				author: song.author,
				songUrl: song.songUrl,
				id: song.id,
				isPlaying: true,
			});
			setSong({
				isPlaying: true,
			});
		}
	};

	const playOrPauseSong = (e) => {
		if (e.stopPropagation) e.stopPropagation();
		if (song.songUrl !== current.songUrl) {
			setCurrent({
				title: song.title,
				author: song.author,
				songUrl: song.songUrl,
				id: song.id,
				isPlaying: true,
			});
		}
	};

	const goToEdit = (e) => {
		if (e.stopPropagation) e.stopPropagation();
		props.goTo(`/edit/${song.api_id}`);
	};

	const deleteSong = (e) => {
		if (e.stopPropagation) e.stopPropagation();

		axios
			.delete(`/api/songs/${props.settedSong.id}`)
			.then((res) => {
				if (res.data.err) {
					console.log(res.data.message);
					return;
				}

				if (song.songUrl === current.songUrl) {
					setCurrent({
						title: null,
						author: null,
						songUrl: null,
						id: null,
						isPlaying: false,
					});

					document.getElementById('player').setAttribute('src', '');
				}

				props.getSongs();
			})
			.catch((err) => console.log(err));
	};

	return (
		<div
			className={current.songUrl === song.songUrl ? 'Song playing' : 'Song'}
			onClick={playSong}>
			<button className='play-btn' onClick={playOrPauseSong}>
				<i className='fas fa-play'></i>
			</button>
			<div className='song-info'>
				<h5>{song.title}</h5>
				<p>{song.author}</p>
			</div>
			<div className='btns'>
				<button className='edit-btn' onClick={goToEdit}>
					<i className='far fa-edit'></i>
				</button>
				<button className='delete-btn' onClick={deleteSong}>
					<i className='far fa-trash-alt'></i>
				</button>
			</div>
		</div>
	);
}
