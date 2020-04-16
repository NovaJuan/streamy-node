import React, { useState } from 'react';
import axios from 'axios';

export default function AddSong(props) {
	const [state, setState] = useState({
		title: '',
		author: '',
		audioFile: null,
		error: '',
	});

	const handleText = (e) => {
		setState({
			...state,
			[e.target.id]: e.target.value,
		});
	};

	const handleFiles = (e) => {
		setState({
			...state,
			audioFile: e.target.files[0],
		});
	};

	const uploadSong = async (e) => {
		e.preventDefault();

		if (!state.title || !state.author || !state.audioFile) {
			setState({
				...state,
				error: 'Missing data.',
			});
			return;
		}

		const submitBtn = document.getElementById('submit-btn');
		submitBtn.disabled = true;
		submitBtn.innerHTML = 'Uploading...';

		const newSong = new FormData();
		newSong.append('title', state.title);
		newSong.append('author', state.author);
		newSong.append('song', state.audioFile);

		try {
			const res = await axios.post('/api/songs', newSong, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});

			if (res.data.error) {
				setState({
					...state,
					error: res.data.message,
				});

				submitBtn.disabled = false;
				submitBtn.innerHTML = 'Add Song';

				return;
			}

			props.history.push('/');
		} catch (err) {
			console.log(err);

			submitBtn.disabled = false;
			submitBtn.innerHTML = 'Add Song';

			setState({
				...state,
				error: 'Something went wrong...',
			});

			return;
		}
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6 offset-md-3'>
					<div className='card bg-dark text-white my-4'>
						<div className='card-header'>
							<h2 className='text-center'>Add Song</h2>
						</div>
						<div className='card-body'>
							<form onSubmit={uploadSong}>
								{state.error ? (
									<p className='text-center text-danger'>{state.error}</p>
								) : null}
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										id='title'
										required
										placeholder='Songs title'
										value={state.title}
										onChange={handleText}
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										id='author'
										required
										placeholder='Songs Author'
										value={state.author}
										onChange={handleText}
									/>
								</div>
								<div className='form-group'>
									<label>Song:</label>
									<input
										type='file'
										className='form-control-file'
										id='song'
										multiple={false}
										accept='audio/mpeg'
										required
										placeholder='Songs Author'
										onChange={handleFiles}
									/>
								</div>
								<button
									type='submit'
									id='submit-btn'
									className='btn btn-success btn-block'>
									Add Song
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
