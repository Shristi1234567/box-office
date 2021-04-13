/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React ,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { apiGet } from '../misc/config';

const Shows = () => {
    const {id} = useParams();
    const [show,setShow]=useState(null);

    useEffect(() => {

        apiGet('/shows/${id}?embed[]=seasons&embed[]=cast').then(results=>
            {
                setShow(results);
            })
        
    }, [id])
   console.log('show',show); 

    return (
        <div>
            This is show page.
        </div>
    )
}

export default Shows
