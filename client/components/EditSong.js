import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function EditSong(props){
    const [state,setState] = useState({
        title:'',
        author:'',
        error:''
    });

    useEffect(() => {
        const {id} = props.match.params;
        axios.get(`/api/songs/${id}`)
            .then(res => {
                if(res.data.error){
                    if(res.data.noSong){
                        props.history.push('/');
                        return
                    }
                    setState({
                        ...state,
                        error:res.data.message
                    }); 
                    return
                }
                setState({
                    ...state,
                    title:res.data.song.title,
                    author:res.data.song.author
                });
            }).catch(err => {
                console.log(err);
                setState({
                    ...state,
                    error:'Something went wrong...'
                });
                return
            })
    },[])

    const handleText = (e)=>{
        setState({
            ...state,
            [e.target.id]:e.target.value
        });
    }

    const updateSong = (e)=>{
        e.preventDefault();
        if(!state.title || !state.author ){
            setState({
                ...state,
                error:'Missing data.'
            });
            return
        }

        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Updating...';

        axios.put(`/api/songs/${props.match.params.id}`,state,)
            .then(res => {
                if(res.data.error){
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Edit Song';
                    setState({
                        ...state,
                        error:res.data.message
                    });
                    return
                }
                props.history.push('/');
            }).catch(err => {
                console.log(err);
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Edit Song';
                setState({
                    ...state,
                    error:'Something went wrong...'
                });
                return
            });
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card bg-dark text-white my-4'>
                        <div className='card-header'>
                            <h2 className='text-center'>Edit Song</h2>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={updateSong}>
                                {state.error ? (<p className='text-center text-danger'>{state.error}</p>):null}
                                <div className='form-group'>
                                    <label htmlFor='title'>Title:</label>
                                    <input type='text' className='form-control' id='title' required placeholder='Songs title' value={state.title} onChange={handleText} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='author'>Author:</label>
                                    <input type='text' className='form-control' id='author' required placeholder='Songs author' value={state.author} onChange={handleText} />
                                </div>
                                <button id='submit-btn' type='submit' className='btn btn-success btn-block'>Edit Song</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 