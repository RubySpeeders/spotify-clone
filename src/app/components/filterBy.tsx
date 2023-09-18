"use client";
import React, { ChangeEvent, useState } from "react";
import { Song } from "../interfaces/song";
import { uniq } from "lodash";

interface Props {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const FilterByArtist = ({ handleChange }: Props) => {
  const artists = ["Donna Summer", "Emily King", "Spice Girls"];
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <form>
      <label htmlFor="dropdown">Show songs by artist:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option>---</option>
        <option value="All Artists">All Artists</option>
        {artists.map((artist) => (
          <option key={artist} value={artist}>
            {artist}
          </option>
        ))}
      </select>
    </form>
  );
};

export default FilterByArtist;
