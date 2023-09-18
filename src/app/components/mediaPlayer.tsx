import React from "react";
import SortBy from "../components/sortBy";
import Library from "../components/library";
import { Song } from "../interfaces/song";

const MediaPlayer = async () => {
  const res = await fetch(
    "https://storage.googleapis.com/atticus-frontend-assessment/api/songs.json"
  );
  const data = await res.json();
  const songs: Song[] = data.songs;
  return (
    <>
      <SortBy songs={songs} />
      <Library songs={songs} />
    </>
  );
};

export default MediaPlayer;
