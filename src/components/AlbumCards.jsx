import Album from "./Album";

export default function AlbumCards({ albums, handleClick }) {
  return (
    <div className="album-grid">
      {albums.map((album) => (
        <Album
          album={album.album}
          artist={album.artist}
          id={album.id}
          key={album.id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
