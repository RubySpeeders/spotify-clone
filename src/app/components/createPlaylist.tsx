"use client";
import React, { FormEvent, useState } from "react";
import { Playlist } from "../interfaces/playlist";
import { v4 as uuidv4 } from "uuid";

export const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState<string>("");
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    // Create a new playlist object and add it to the playlists array
    const newPlaylist: Playlist = { name: playlistName, id: uuidv4() };
    console.log(newPlaylist);
    setPlaylists([...playlists, newPlaylist]);

    // Clear the input field
    setPlaylistName("");
  };
  return (
    <>
      <h2>Create a playlist</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Playlist Name:{" "}
          <input
            name="playlistName"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
      <h3>All Playlists</h3>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </>
  );
};
