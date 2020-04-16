import React, { useState, createContext } from 'react';

export const SongsContext = createContext();

const SongsContextProvider = (props) => {
	const [playlist, setSongs] = useState({
		songs: null,
		noSongs: false,
	});

	return (
		<SongsContext.Provider value={{ playlist, setSongs }}>
			{props.children}
		</SongsContext.Provider>
	);
};

export default SongsContextProvider;
