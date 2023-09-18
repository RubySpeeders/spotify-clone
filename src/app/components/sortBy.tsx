"use client";
import React, { ChangeEvent, useState } from "react";
import { Song } from "../interfaces/song";
import { handleSort } from "../utils/handleSort";

interface Props {
  songs: Song[];
}

const SortBy = ({ songs }: Props) => {
  const options = ["Artist", "Title", "Album", "Song length"];
  const [selectedOption, setSelectedOption] = useState("");
  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedOption(e.target.value);
    handleSort(songs, e.target.value as keyof Song);
    console.log(songs);
  };
  return (
    <form>
      <label htmlFor="dropdown">Sort by:</label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SortBy;
