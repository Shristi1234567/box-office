/* eslint-disable no-use-before-define */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

export const Home = () => {
    //update function is setInput
    const[input,setInput]=useState('');
    
    const onSearch = () => {
        //google search tvmaze
        //https://api.tvmaze.com/search/shows?q=girls
        //it is use to fetch the remote/external data so we use browser api(fetch)
        //fetch function return promise so we use then it will return response object we need to convert it into json
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then(r => r.json())
        .then(result => {
            console.log(result);
        })
    }

    //on changes event when input is change
    const onInputChange = ev => {
        //for updating the state
        setInput(ev.target.value);
        //get the event value that we type by this command
       //console.log(ev.target.value);
    };

    const onKeyDown = ev => {
        if(ev.keyCode === 13)
        {
            onSearch();
        }
        //if we press A it will print 65 (example)
        console.log(ev.keyCode);
    }

    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
            <button type="button" onClick={onSearch}>Search</button>
        </MainPageLayout>
    )   
}
export default Home