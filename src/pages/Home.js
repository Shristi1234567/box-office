/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-empty */
/* eslint-disable no-use-before-define */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React,{useState} from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config';

export const Home = () => {
    //update function is setInput
    const[input,setInput]=useState('');
    //for result we will set state
    const[results,setResults]=useState(null);
    //for search of shows and actor
    const[searchOption,setsearchOption]=useState('shows');

    const isshowSearch = searchOption === 'shows';

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`)
        .then(result => {
            setResults(result);
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

    const renderResults = () => {
        //if we enter something wrong it will give empty result
        if(results && results.length === 0)
        {
            return <div>No results</div>
        }
        if(results && results.length > 0 )
        {
            return results[0].show ? (
                <ShowGrid data={results}/>
            ) : (
                <ActorGrid data={results}/>                
            );
            //return results[0].show ? results.map(item => (
              //  <div key={item.show.id}>{item.show.name}</div>
                //)) : results.map(item => (
                //<div key={item.person.id}>{item.person.name}</div>
               // ));
        }
        return null;
    }

    const onRadioChange = (ev) =>
    {
        setsearchOption(ev.target.value);
    }

    return (
        <MainPageLayout>
            <input type="text" placeholder="Search for something" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input id="shows-search" type="radio" value="shows" checked={isshowSearch} onChange={onRadioChange}/>
                </label>
                <label htmlFor="actors-search">
                    Actors
                    <input id="actors-search" type="radio" value="people" checked={!isshowSearch} onChange={onRadioChange}/>
                </label>
            </div>
            <button type="button" onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
    )   
}
export default Home