import React from 'react'
import { useFetch } from '../Hook/useFetch';
import './multiple.css';

export const MultipleCustomHooks = () => {
//    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
//    console.log(state)
    const { loading } =  useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(loading);
  return (
 <div>
            <h1>BreakingBad Quotes</h1>
            <hr />


            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-0">Hey </p>
                            <footer className="blockquote-footer"> Hola </footer>
                        </blockquote>
                    )
            }

      

 
    </div>
  )
}
