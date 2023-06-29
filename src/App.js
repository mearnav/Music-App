import { useEffect, useState } from "react";
import Player from "./components/Player";

function App() {

  const [songs] = useState([
    {
      title: "Die For You",
      artist: "The Weeknd",
      img_src: "./images/die-for-you.png",
      src: "./songs/DIE FOR YOU.m4a"
    },
    {
      title: "A Little Bit Dangerous",
      artist: "CRMNL",
      img_src: "./images/little-bit-dangerous.jpg",
      src: "./songs/A Little Bit Dangerous.mp3"
    },
    {
      title: "Akh Lad Jaave",
      artist: "Asees Kaur, Badshah, and Jubin Nautiyal",
      img_src: "./images/ankh-lad-jaave.jpg",
      src: "./songs/Akh Lad Jaave.m4a"
    },
    {
      title: "Attention",
      artist: "Charlie Puth",
      img_src: "./images/attention.png",
      src: "./songs/Attention.mp3"
    },
    {
      title: "Bhool Bhulaiya 2 Title Track",
      artist: "Neeraj Shridhar",
      img_src: "./images/bhool-bhulaiya-2.jpeg",
      src: "./songs/Bhool Bhulaiyaa.mp3"
    },
    {
      title: "Call Out My Name",
      artist: "The Weeknd",
      img_src: "./images/call-out-my-name.jpg",
      src: "./songs/Call Out My Name.mp3"
    },
    {
      title: "Chote Chote Peg Maare",
      artist: "Honey Singh",
      img_src: "./images/chote-chote-peg.jpg",
      src: "./songs/Chhote Chhote Peg.mp3"
    },
    {
      title: "Chogada",
      artist: "Asees Kaur and Darshan Raval",
      img_src: "./images/chogada.jpeg",
      src: "./songs/Chogada.m4a"
    },
    {
      title: "Creepin",
      artist: "The Weeknd",
      img_src: "./images/creepin.jpg",
      src: "./songs/Creepin.mp3"
    },
    {
      title: "Darkside",
      artist: "Alan Walker",
      img_src: "./images/darkside.jpg",
      src: "./songs/Darkside.mp3"
    },
    {
      title: "Diamond Heart",
      artist: "Alan Walker",
      img_src: "./images/diamond-heart.jpg",
      src: "./songs/Diamond Heart.mp3"
    },
    {
      title: "Double Fantasy",
      artist: "The Weeknd",
      img_src: "./images/double-fantasy.jpeg",
      src: "./songs/Double Fantasy.m4a"
    },
    {
      title: "Forever",
      artist: "Shokus Apollo",
      img_src: "./images/forever.jpg",
      src: "./songs/Forever.mp3"
    },
    {
      title: "Hymn of the Weekend",
      artist: "Coldplay",
      img_src: "./images/hymn-for-the-weekend.jpeg",
      src: "./songs/Hymn For the Weekend.mp3"
    },
    {
      title: "Left and Right",
      artist: "Charlie Puth",
      img_src: "./images/Left-and-Right.webp",
      src: "./songs/Left and Right.m4a"
    },
    {
      title: "More than you know",
      artist: "Axwell and Ingrosso",
      img_src: "./images/more-than-you-know.jpeg",
      src: "./songs/More Than Your Know.mp3"
    },
    {
      title: "Save your tears",
      artist: "The Weeknd",
      img_src: "./images/save-your-tears.jpg",
      src: "./songs/Save Your Tears.mp3"
    },
    {
      title: "Sing Me To Sleep",
      artist: "Alan Walker",
      img_src: "./images/sing-me-to-sleep.jpg",
      src: "./songs/Sing Me To Sleep.mp3"
    },
    {
      title: "Starboy",
      artist: "The Weeknd",
      img_src: "./images/Starboy.jpg",
      src: "./songs/Starboy.mp3"
    },
    {
      title: "Stay X Ranjha",
      artist: "Bpraak, Justin Bieber and Jasleen Royal",
      img_src: "./images/Stay-X-Ranjha.jpg",
      src: "./songs/Stay X Ranjha.mp3"
    },
    {
      title: "Thug Le",
      artist: "Shweta Pandit and Vishal Dadlani",
      img_src: "./images/thus-le.jpg",
      src: "./songs/Thug Le.m4a"
    },
    {
      title: "We Don't Talk Anymore",
      artist: "Charlie Puth",
      img_src: "./images/we-don't-talk-anymore.jpg",
      src: "./songs/We Don't Talk Anymore.mp3"
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      img_src: "./images/blinding-light.jpg",
      src: "./songs/Blinding Lights.mp3"
    }
  ])

  const[currentSongIndex, setCurrentSongIndex] = useState(0);
  const[nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0
      }
      else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.length])

  return (
    <div className="App">
      <Player
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />
    </div>
  );
}

export default App;
