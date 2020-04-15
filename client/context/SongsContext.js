import React,{useState,createContext} from 'react';
import axios from 'axios';

export const SongsContext = createContext();

const SongsContextProvider = (props) =>{
    const [songs,setSongs] = useState({
        songs:null,
        noSongs:false
    });


    return(
        <SongsContext.Provider value={{songs,setSongs}}>
            {props.children}
        </SongsContext.Provider>
    )
}

export default SongsContextProvider;