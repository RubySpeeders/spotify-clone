"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Song } from "../interfaces/song";
import AddToPlaylistButton from "./addToPlaylistButton";
import albumArt from "../../../public/dhruv-N9UuFddi7hs-unsplash.jpg";
import FilterByArtist from "./filterBy";
import { shuffle, uniq } from "lodash";

interface Props {
  songs: Song[];
}

const Library = ({ songs }: Props) => {
  const [songsToDisplay, setSongsToDisplay] = useState<Song[]>(songs);
  const [selectedOption, setSelectedOption] = useState("");
  //shuffleSongs only works when all Songs are shown
  const shuffleSongs = () => {
    setSongsToDisplay(shuffle(songs));
  };
  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    //this is not displaying all songs. It is displaying no songs; the console.log does get the songs, and I'm not sure what the issue is currently.
    if (e.target.value === "All Artists") {
      console.log({ songs });
      setSongsToDisplay(songs);
    }
    setSelectedOption(e.target.value);
    const filteredbyArtist = songs.filter(
      (song) => e.target.value === song.artist
    );
    setSongsToDisplay(filteredbyArtist);
  };

  return (
    <>
      <FilterByArtist
        artists={uniq(songs.map((song) => song.artist))}
        handleChange={handleDropdownChange}
      />
      <button onClick={shuffleSongs}>Shuffle Songs</button>
      <ul>
        <li>album art| artist | title | album</li>
        {songsToDisplay.map((song) => {
          return (
            <li key={song.title}>
              <Image
                src={albumArt}
                width={45}
                height={45}
                alt="Picture of the author"
              />
              {song.artist} | {song.title} | {song.album} |
              <AddToPlaylistButton />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Library;
