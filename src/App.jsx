import { useState } from "react";
import "./App.css";
import AlbumCards from "./components/AlbumCards";
import randomizer from "./components/randomizer";
import Counter from "./components/Counter";

function App() {
  const initAlbums = [
    { album: "Some+Girls", artist: "The+Rolling+Stones", id: 1 },
    { album: "Blonde+On+Blonde", artist: "Bob+Dylan", id: 2 },
    { album: "Houses+Of+The+Holy", artist: "Led+Zeppelin", id: 3 },
    { album: "Wake+Of+The+Flood", artist: "Grateful+Dead", id: 4 },
    { album: "The+Piper+At+The+Gates+Of+Dawn", artist: "Pink+Floyd", id: 5 },
    { album: "Zuma", artist: "Neil+Young", id: 6 },
    { album: "Revolver", artist: "The+Beatles", id: 7 },
    {
      album: "The+Velvet+Underground",
      artist: "The+Velvet+Underground",
      id: 8,
    },
    { album: "Maggot+Brain", artist: "Funkadelic", id: 9 },
    { album: "Electric+Ladyland", artist: "Jimi+Hendrix", id: 10 },
  ];

  const [albums, setAlbums] = useState(initAlbums);
  const [guesses, setGuesses] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleClick(e) {
    let albumId = e.target.dataset.id;
    if (currentScore === 10) {
      return;
    }
    const newAlbumArr = randomizer(albums);
    setAlbums(newAlbumArr);

    if (!guesses.includes(albumId)) {
      setGuesses([...guesses, albumId]);
      if (currentScore === highScore) {
        setHighScore(highScore + 1);
      }
      setCurrentScore(currentScore + 1);
    } else {
      setGuesses([]);
      setCurrentScore(0);
    }
  }

  function handleReset(e) {
    e.preventDefault();
    setGuesses([]);
    setCurrentScore(0);
    const newAlbumArr = randomizer(albums);
    setAlbums(newAlbumArr);
  }

  return (
    <>
      <Counter
        currentScore={currentScore}
        highScore={highScore}
        handleReset={handleReset}
      />
      <AlbumCards albums={albums} handleClick={handleClick} />
    </>
  );
}

export default App;

/* 
Considerations/requirements
+Scoreboard: Counts current state and displays best score
+Function to display cards in random order every time user clicks (**invoke when component mounts**)
+Fetch cards from an API, display images and text (like a name)

Design
+A function that calls the API and stores the return objects in an array (state or prop?)
+State for managing choice history, with calculated variable for length of that array for tracking current score
+State for managing "high score"
+function for randomly displaying cards when click occurs, likely a useEffect

[
    { album: "Some+Girls", artist: "The+Rolling+Stones" },
    { album: "Blonde+On+Blonde", artist: "Bob+Dylan" },
  ]

*/
