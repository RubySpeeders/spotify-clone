import React from "react";
import { Song } from "../interfaces/song";

const Library = async () => {
  const res = await fetch(
    "https://storage.googleapis.com/atticus-frontend-assessment/api/songs.json"
  );
  const data = await res.json();
  const songs: Song[] = data.songs;
  return (
    <>
      <h1>Library</h1>
      <ul>
        {songs.map((song) => {
          return (
            <li key={song.title}>
              {song.title} | {song.album} | {song.artist}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Library;
