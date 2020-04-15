import React from 'react';
import {Switch,Route} from 'react-router-dom';

//Components
import Navbar from './components/Navbar';
import Songs from './components/Songs';
import Player from './components/Player';
import AddSong from './components/AddSong';
import EditSong from './components/EditSong';

//Song Context
import SongContextProvider from './context/SongContext';
import SongsContextProvider from './context/SongsContext';

export default function App(){
    return(
        <div className='App'>
        <SongsContextProvider>
            <SongContextProvider>
                <Navbar />
                <Switch>
                    <Route component={Songs} exact path='/' />
                    <Route component={AddSong} exact path='/add' />
                    <Route component={EditSong} exact path='/edit/:id' />
                </Switch>
                <Player />
            </SongContextProvider>
        </SongsContextProvider>
        </div>
    )
}