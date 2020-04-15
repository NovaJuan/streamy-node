import React,{useState,createContext,useContext} from 'react';

import {SongsContext} from './SongsContext'

export const SongContext = createContext();

const SongContextProvider = (props) =>{
    const {songs,setSongs} = useContext(SongsContext);

    const [songPlaying,setSongPlaying] = useState({
        title:null,
        author:null,
        songUrl:null,
        isPlaying:false,
        id:null
    });

    function nextSong(){
        let nextId = songPlaying.id + 1;
        if(nextId >= songs.songs.length){
            nextId = 0;
        }
        const nextSong = songs.songs[nextId];
        setSongPlaying({
            title:nextSong.title,
            author:nextSong.author,
            songUrl:nextSong.song_url,
            isPlaying:true,
            id:nextId
        });
    }

    function prevSong(){
        let nextId = songPlaying.id - 1;
        if(nextId < 0){
            nextId = songs.songs.length - 1;
        }
        const nextSong = songs.songs[nextId];
        setSongPlaying({
            title:nextSong.title,
            author:nextSong.author,
            songUrl:nextSong.song_url,
            isPlaying:true,
            id:nextId
        });
    }

    function randomSong(){
        const minIndex = 0;
        const maxIndex = songs.songs.length;
        const nextId = Math.floor((Math.random() * (maxIndex - minIndex)) + minIndex);
        const nextSong = songs.songs[nextId];
        if(nextSong.song_url === songPlaying.songUrl) return randomSong(); 
        setSongPlaying({
            title:nextSong.title,
            author:nextSong.author,
            songUrl:nextSong.song_url,
            isPlaying:true,
            id:nextId
        });
    }

    return(
        <SongContext.Provider value={{songPlaying,setSongPlaying,nextSong,prevSong,randomSong}}>
            {props.children}
        </SongContext.Provider>
    )
}

export default SongContextProvider;