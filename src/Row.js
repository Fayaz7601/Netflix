import React from 'react'
import { useEffect, useState } from 'react'
import instance from './baseurl'
import axios from 'axios'
import './Row.css'

function Row({ title, fetchurl,isLargeRow }) {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"

    // create a function to call api

    async function getData() {
        const outdata = await instance.get(fetchurl)
        // console.log(result.data.results);
        setMovies(outdata.data.results)
    }
    useEffect(() => {
        getData()
    }, []
    )

    // console.log(movies);
    return (


        <div className='row'>
            <h1>{title}</h1>
            <div className='movies'>
                {
                    movies.map(movie => (
                        <img
                            className={`movie ${isLargeRow && "largeMovie"}`}
                            src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                            alt={movie.original_title}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Row
