import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import instance from './baseurl'
import './Banner.css'





function Banner({ fetchurl }) {
  const [movies, setMovies] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original/"

  // create a function to call api

  async function getData() {
    const outdata = await instance.get(fetchurl)
    // console.log(result.data.results);
    setMovies(outdata.data.results[
      Math.floor(Math.random() * outdata.data.results.length - 1)
    ])
  }
  useEffect(() => {
    getData()
  }, []
  )
  // console.log(movies);
  function truncate(str,n) {
    return str?.length>n?str.substr(0, n - 1)+ ". . . .":str
  }
  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url(${base_url}${movies?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center"

      }}>
      <div className='bannerContent'>
        <h1 className='title'>{movies?.name}</h1>
        <h3 className='desc'>
          {truncate(movies?.overview,150)}
        </h3>
      </div>

    </div>
  )
}

export default Banner
