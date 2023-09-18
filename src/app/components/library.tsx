import React from "react";
import { Song } from "../interfaces/song";

interface Props {
  songs: Song[];
}

const Library = ({ songs }: Props) => {
  return (
    <>
      <h2>Library</h2>
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
