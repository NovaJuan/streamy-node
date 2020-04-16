import React, { useContext, useEffect, useState } from 'react';
import { SongContext } from '../context/SongContext';

const Player = () => {
	const [player, setPlayer] = useState({
		playing: false,
		songUrl: '',
		isPaused: false,
	});

	const { current, nextSong, prevSong, randomSong } = useContext(SongContext);

	let myplayer = null;
	let togglePlay = null;
	let trackDuration = null;
	if (current.isPlaying) {
		myplayer = document.getElementById('player');
		togglePlay = document.getElementById('toggle-play');
		trackDuration = document.getElementById('track-duration');
	}

	const playOrPause = (e) => {
		if (e.stopPropagation) e.stopPropagation();

		e.preventDefault();

		if (myplayer.getAttribute('data-playing') === 'true') {
			myplayer.pause();

			myplayer.setAttribute('data-playing', 'false');

			togglePlay.innerHTML = '<i class="far fa-play-circle"></i>';
		} else {
			myplayer.play();

			myplayer.setAttribute('data-playing', 'true');

			togglePlay.innerHTML = '<i class="far fa-pause-circle"></i>';
		}
	};

	const reloadPlayer = () => {
		myplayer.load();

		myplayer.play();

		myplayer.setAttribute('data-playing', 'true');

		togglePlay.innerHTML = '<i class="far fa-pause-circle"></i>';
	};

	const handleVolume = (e) => {
		myplayer.volume = e.target.value;
	};

	useEffect(() => {
		if (current.isPlaying) {
			if (player.songUrl !== current.songUrl) {
				myplayer.setAttribute('data-playing', 'true');

				myplayer.setAttribute('src', current.songUrl);

				myplayer.onloadedmetadata = (e) => {
					let duration = Math.round(e.target.duration),
						hours = 0,
						minutes = 0,
						seconds = 0;

					while (duration > 0) {
						if (duration >= 3600) {
							hours++;
							duration -= 3600;
						} else if (duration >= 60) {
							minutes++;
							duration -= 60;
						} else {
							seconds++;
							duration--;
						}
					}

					if (hours > 0) {
						trackDuration.innerText = `(${hours}:${minutes}:${
							seconds < 10 ? '0' + seconds : seconds
						})`;
					} else {
						trackDuration.innerText = `(${minutes}:${
							seconds < 10 ? '0' + seconds : seconds
						})`;
					}
				};

				myplayer.load();
				myplayer.play();

				togglePlay.innerHTML = '<i class="far fa-pause-circle"></i>';

				setPlayer({
					songUrl: current.songUrl,
				});
			}
		}
	}, [current]);

	return (
		<div className={current.isPlaying ? 'Player' : 'Player d-none'}>
			<audio src='' id='player' data-playing='false' onEnded={nextSong}></audio>
			<div className='player-text'>
				<span className='song-title'>{current.title}</span>
				<span className='song-author'> - {current.author} </span>
				<span className='song-duration' id='track-duration'></span>
			</div>
			<div className='player-buttons'>
				<button id='toggle-play' onClick={playOrPause}>
					<i className='far fa-pause-circle'></i>
				</button>
				<button onClick={reloadPlayer}>
					<i className='fas fa-redo-alt'></i>
				</button>
				<button onClick={prevSong}>
					<i className='fas fa-backward'></i>
				</button>
				<button onClick={nextSong}>
					<i className='fas fa-forward'></i>
				</button>
				<button onClick={randomSong}>
					<i className='fas fa-random'></i>
				</button>
				<input
					type='range'
					max='1'
					min='0'
					step='0.1'
					onChange={handleVolume}
				/>
			</div>
		</div>
	);
};

export default Player;
