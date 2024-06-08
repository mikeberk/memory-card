import { useState, useEffect } from "react";
export default function Album({ album, artist, id, onClick }) {
  const baseUrl = "https://ws.audioscrobbler.com/2.0/";
  const method = "album.getinfo";
  const api_key = "42559a8a182d685d1994eae2278e2c56";

  // state
  const [albumTitle, setAlbumTitle] = useState(null);
  const [albumImg, setAlbumImg] = useState(null);
  useEffect(() => {
    fetch(
      `${baseUrl}?method=${method}&api_key=${api_key}&artist=${artist}&album=${album}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbumTitle(data.album.name);
        const filteredItem = data.album.image.find(
          (img) => img["size"] === "mega"
        );
        setAlbumImg(filteredItem["#text"]);
      });
  }, [album, artist]);

  return (
    <div key={id} onClick={onClick}>
      <div className="album-card">
        <img src={albumImg} alt={albumTitle} data-id={id} draggable="false" />
        <div className="card-text">
          <p data-id={id}>{albumTitle}</p>
        </div>
      </div>
    </div>
  );
}
