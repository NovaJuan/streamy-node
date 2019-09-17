import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';

//Components
import Song from './Song';

//Context
import {SongsContext} from '../context/SongsContext';

export default function Songs(props){
    const [state,setState] = useState({
        songs:null,
        noSongs:false
    })
    const {songs,setSongs} = useContext(SongsContext);

    useEffect(()=>{
        getSongs();
    },[]);

    const getSongs = () => {
        axios.get('/api/songs')
            .then(res =>{
                if(res.data.error){
                    if(res.data.noSongs){
                        setState({
                            noSongs:true
                        });
                        setSongs({
                            noSongs:true
                        })
                    }
                    return console.log(res.data.message);
                }
                setState({
                    songs:res.data.songs,
                    noSongs:false,
                }); 
                setSongs({
                    songs:res.data.songs,
                    noSongs:false
                })
            })
            .catch(err => console.log(err));
    }

    let content = (<h2 className='text-center' >Loading...</h2>);
    

    if(state.noSongs){
        content = (<h2 className='text-center' >No songs on database</h2>);
    }

    if(state.songs && !state.noSongs){
        content = state.songs.map((song,i) => {
            return(
                <Song settedSong={song} index={i} key={song.id} goTo={props.history.push} getSongs={getSongs}/>
            )
        });
    }
    

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 offset-lg-3'>
                    <div className='Songs card bg-dark text-white my-4'>
                        <div className='card-body'>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}