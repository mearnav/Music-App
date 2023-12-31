import React, { useEffect, useReducer, useRef, useState } from 'react'
import Details from './Details'
import Control from './Control'


function Player(props) {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if(isPlaying) {
            audioEl.current.play()
        }
        else{
            audioEl.current.pause()
        }
    })

    const skipSong = (fowards = true) => {
        if(fowards){
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length -1){
                    temp = 0;
                }

                return temp;
            });
        }
        else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if(temp <= 0) {
                    temp = props.songs.length -1;
                }
                
                return temp;
            });
        }
    };

  return (
    <div className="player">
      <h4>
        Now Playing
      </h4>
      <Details
        song = {props.songs[props.currentSongIndex]}
      />
      <Control
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
        skipSong = {skipSong}
      />
        <audio 
            className = "player__audio"
            src={props.songs[props.currentSongIndex].src}
            ref = {audioEl}
            controls
        >
        </audio>
        <p>
            Comming Up: { " " }
            <span>
                {props.songs[props.nextSongIndex].title} by {" "}
                {props.songs[props.nextSongIndex].artist}
            </span> 
        </p>
    </div>
  )
}

export default Player
