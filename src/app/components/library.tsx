"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Song } from "../interfaces/song";
import AddToPlaylistButton from "./addToPlaylistButton";
import albumArt from "../../../public/dhruv-N9UuFddi7hs-unsplash.jpg";
import FilterByArtist from "./filterBy";
import { shuffle, uniq } from "lodash";
import SortBy from "./sortBy";

interface Props {
  songs: Song[];
}

const Library = ({ songs }: Props) => {
  const [songsToDisplay, setSongsToDisplay] = useState<Song[]>(songs);
  const [selectedOption, setSelectedOption] = useState("");
  //shuffleSongs only works when all Songs are shown
  const shuffleSongs = () => {
    setSongsToDisplay(shuffle(songsToDisplay));
  };

  const handleDropdownChangeSort = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedOption(e.target.value);
    if (e.target.value === "Title") {
      console.log("title");
      const sorted = songs.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
      setSongsToDisplay(sorted);
    } else if (e.target.value === "Artist") {
      const sorted = songs.sort((a, b) =>
        a.artist.toLowerCase().localeCompare(b.artist.toLowerCase())
      );
      setSongsToDisplay(sorted);
    } else if (e.target.value === "Album") {
      const sorted = songs.sort((a, b) =>
        a.album.toLowerCase().localeCompare(b.album.toLowerCase())
      );
      setSongsToDisplay(sorted);
    } else if (e.target.value === "Song length") {
      const sorted = songs.sort((a, b) =>
        a.song_length.toLowerCase().localeCompare(b.song_length.toLowerCase())
      );
      setSongsToDisplay(sorted);
    }
    // handleSort(songs, e.target.value as keyof Song);
  };

  const handleDropdownChangeFilter = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
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
      <SortBy handleChange={handleDropdownChangeSort} />
      <FilterByArtist
        artists={uniq(songs.map((song) => song.artist))}
        handleChange={handleDropdownChangeFilter}
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
