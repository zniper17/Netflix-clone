
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from './axios.js';
import movieTrailer from 'movie-trailer';

import "./Row.css"
const base_url="https://image.tmdb.org/t/p/original/"
function Row(props){
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("")

    useEffect(() =>{
        async function fetchData(){
            const request =await axios.get(props.fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[props.fetchUrl]);
    const opts={
        height:"390",
        width:"100%",
        playerVarrs:{
            autoplay:1,

        }
    }
const handleCLick = (movie) => {
    if(trailerUrl){
        setTrailerUrl('');

    } else {
        movieTrailer(movie?.name || "")
        .then((url) =>{
            const urlParams= new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));

        }).catch((error) => console.log(error))
    }
}   
    
    return (
        <div className='row'>
<h2>{props.title}</h2>
<div className='row__posters'>
    {movies.map(movie => (
        <img 
        onClick={() => handleCLick(movie)}
        key={movie.id}
        className={`row_poster ${props.isLargeRow && "row__posterLarge"}`}
        src={`${base_url}${props.isLargeRow? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />

    ))}
</div>
{trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row