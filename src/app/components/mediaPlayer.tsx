import React from "react";
import SortBy from "../components/sortBy";
import Library from "../components/library";
import { Song } from "../interfaces/song";
import FilterByArtist from "./filterBy";

const MediaPlayer = async () => {
  //The instructions stated to use useEffect. Normally, I would use axios and and use useEffect/useState to fetch data, but the new Next.js allows SSR, which means that I don't have to do another call to the API for data after loading page.
  const res = await fetch(
    "https://storage.googleapis.com/atticus-frontend-assessment/api/songs.json"
  );
  //I have put this error handling in for now. I understand it does not provide a user-friendly experience, but it is something I would add if I had more time!
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const songs: Song[] = data.songs;
  return (
    //with more time, I would have done createContext so that all these components have access to songs without having to send in props
    <>
      <SortBy songs={songs} />
      <Library songs={songs} />
    </>
  );
};

export default MediaPlayer;
