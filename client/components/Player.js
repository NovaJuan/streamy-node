import React,{useContext,useEffect,useState} from 'react';
import {SongContext} from '../context/SongContext';

export default function Player(){
    const [player,setPlayer] = useState({
        playing:false,
        songUrl:'',
        isPaused:false
    })

    const {songPlaying,setSongPlaying,nextSong,prevSong,randomSong} = useContext(SongContext);

    if(songPlaying.isPlaying){
        var myplayer  = document.getElementById('player');
        var togglePlay = document.getElementById('toggle-play');
        var trackDuration = document.getElementById('track-duration');
    }

    function playOrPause(e){
        if(e.stopPropagation) e.stopPropagation();
        e.preventDefault();
        if(myplayer.getAttribute('data-playing') === 'true'){
            myplayer.pause();
            myplayer.setAttribute('data-playing','false');
            togglePlay.innerHTML = '<i class="far fa-play-circle"></i>';
        }else{
            myplayer.play();
            myplayer.setAttribute('data-playing','true');
            togglePlay.innerHTML = '<i class="far fa-pause-circle"></i>';
        }
    }

    function reloadPlayer(){
        myplayer.load();
        myplayer.play();
        myplayer.setAttribute('data-playing','true');
        togglePlay.innerHTML = '<i class="far fa-pause-circle"></i>';
    }

    function handleVolume(e){
        myplayer.volume = e.target.value;
    }
    
    useEffect(()=>{
        if(songPlaying.isPlaying){
            if(player.songUrl !== songPlaying.songUrl){
                myplayer.setAttribute('data-playing','true');
                myplayer.setAttribute('src',songPlaying.songUrl);
                myplayer.onloadedmetadata = (e) =>{
                    let duration = Math.round(e.target.duration);
                    let hours=0;
                    let minutes=0;
                    let seconds=0;
                    while(duration > 0){
                        if(duration >= 3600){
                            hours++;
                            duration -= 3600;
                        }else if(duration >= 60){
                            minutes++;
                            duration -= 60;
                        }else{
                            seconds++;
                            duration--;
                        }
                    }
                    if(hours > 0){
                        trackDuration.innerText = `(${hours}:${minutes}:${(seconds < 10) ? '0' + seconds : seconds })`;
                    }else{
                        trackDuration.innerText = `(${minutes}:${(seconds < 10) ? '0' + seconds : seconds })`;
                    }
                };
                myplayer.load();
                myplayer.play();
                togglePlay.innerHTML = '<i class="far fa-pause-circle"></i>';
    
                setPlayer({
                    songUrl:songPlaying.songUrl
                });
            }
        }
    },[songPlaying]);

    

    return(
        <div className={songPlaying.isPlaying ? ('Player'):('Player d-none')}>
            <audio src="" id='player' data-playing='false' onEnded={nextSong}></audio>
            <div className="player-text">
                <span className='song-title'>{songPlaying.title}</span>
                <span className='song-author'> - {songPlaying.author} </span>
                <span className='song-duration' id='track-duration'></span>
            </div>
            <div className='player-buttons'>
                <button id='toggle-play' onClick={playOrPause}><i className="far fa-pause-circle"></i></button>
                <button onClick={reloadPlayer}><i className="fas fa-redo-alt"></i></button>
                <button onClick={prevSong}><i className="fas fa-backward"></i></button>
                <button onClick={nextSong}><i className="fas fa-forward"></i></button>
                <button onClick={randomSong}><i className="fas fa-random"></i></button>
                <input type="range" max='1' min='0' step='0.1' onChange={handleVolume}/>
            </div>
        </div>
    )
}